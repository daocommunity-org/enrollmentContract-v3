// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Database {
    struct Member {
        uint256 id;
        address walletAddress;
        string name;
        string regno;
        string email;
        string phone;
        string message;
        uint256 enrollmentTime;
        bool isActive;
    }

    uint256 private memberCount;
    mapping(address => Member) public members;
    address[] public memberList;
    mapping(address => bool) public admins;
    bool public paused;
    Member[] allMembers;

    event MemberEnrolled(address indexed member, string name, uint256 id);
    event MemberUpdated(address indexed member, string name);
    event MemberDeleted(address indexed member);
    event MemberDeactivated(address indexed member);
    event MemberReactivated(address indexed member);
    event AdminAdded(address indexed newAdmin);
    event AdminRemoved(address indexed admin);
    event ContractPaused();
    event ContractUnpaused();

    constructor() {
        admins[msg.sender] = true;
        memberCount = 0;
    }

    modifier onlyAdmin() {
        require(admins[msg.sender], "Not an admin");
        _;
    }

    modifier whenNotPaused() {
        require(!paused, "Contract is paused");
        _;
    }

    function enroll(string memory _name, string memory _email, string memory _phone, string memory _regno, string memory _msg) public whenNotPaused { require(!members[msg.sender].isActive, "Already enrolled"); memberCount++; members[msg.sender] = Member({ id: memberCount, walletAddress: msg.sender, name: _name, regno: _regno, email: _email, phone: _phone, message: _msg, enrollmentTime: block.timestamp, isActive: true }); memberList.push(msg.sender); allMembers.push(members[msg.sender]); emit MemberEnrolled(msg.sender, _name, memberCount); }
        require(!members[msg.sender].isActive, "Already enrolled");

        memberCount++;
        members[msg.sender] = Member({
            id: memberCount,
            walletAddress: msg.sender,
            name: _name,
            regno: _regno,
            email: _email,
            phone: _phone,
            message: _msg,
            enrollmentTime: block.timestamp,
            isActive: true
        });

        memberList.push(msg.sender);
        allMembers.push(members[msg.sender]);

        emit MemberEnrolled(msg.sender, _name, memberCount);
    }

    function updateMemberInfo(string memory _name, string memory _email, string memory _phoneNumber, string memory _msg) public whenNotPaused {
        require(members[msg.sender].isActive, "Not enrolled");
        // members[msg.sender].name = _name;
        // members[msg.sender].email = _email;
        // members[msg.sender].phone = _phoneNumber;
        // members[msg.sender].message = _msg;
        if (bytes(_name).length > 0) {
            members[msg.sender].name = _name;
        }
        if (bytes(_email).length > 0) {
            members[msg.sender].email = _email;
        }
        if (bytes(_phoneNumber).length > 0) {
            members[msg.sender].phone = _phoneNumber;
        }
        if (bytes(_msg).length > 0) {
            members[msg.sender].message = _msg;
        }
        for (uint256 i = 0; i < memberList.length; i++) {
            if (memberList[i] == msg.sender) {
                allMembers[i] = members[msg.sender];
                break;
            }
        }

        emit MemberUpdated(msg.sender, _name);
    }

    function adminUpdateMemberInfo(address _member, string memory _name, string memory _email, string memory _phoneNumber, string memory _msg) public onlyAdmin {
        require(members[_member].isActive, "Not enrolled");
        members[_member].name = _name;
        members[_member].email = _email;
        members[_member].phone = _phoneNumber;
        members[_member].message = _msg;
        emit MemberUpdated(_member, _name);
    }

    function removeMember(address _address) public whenNotPaused onlyAdmin {
        require(members[msg.sender].isActive, "Not enrolled");
        for (uint256 i = 0; i < memberList.length; i++) {
            if (memberList[i] == _address) {
                for (uint256 j = i; j < memberList.length - 1; j++) {
                    memberList[j] = memberList[j + 1];
                    allMembers[j] = allMembers[j + 1];
                }
                memberList.pop();
                allMembers.pop();
                break;
            }
        }

        emit MemberDeleted(_address);
    }

    function deactivateMember(address _member) public onlyAdmin {
        require(members[_member].isActive, "Member not active");
        members[_member].isActive = false;
        emit MemberDeactivated(_member);
    }

    function reactivateMember(address _member) public onlyAdmin {
        require(!members[_member].isActive, "Member already active");
        members[_member].isActive = true;
        emit MemberReactivated(_member);
    }

    function addAdmin(address _newAdmin) public onlyAdmin {
        admins[_newAdmin] = true;
        emit AdminAdded(_newAdmin);
    }

    function removeAdmin(address _admin) public onlyAdmin {
        require(_admin != msg.sender, "Cannot remove self as admin");
        admins[_admin] = false;
        emit AdminRemoved(_admin);
    }

    function isEnrolled(address _address) public view returns (bool) {
        return members[_address].isActive;
    }

    function getMemberInfo(
        address _member
    ) public view returns (Member memory) {
        require(members[_member].isActive, "Member not active");
        return members[_member];
    }

    function getAllAddr() public view returns (address[] memory) {
        return memberList;
    }

    function getAllMembers() public view returns (Member[] memory) {
        return allMembers;
    }

    function getActiveAddr() public view returns (address[] memory) {
        uint256 ac = 0;
        for (uint256 i = 0; i < memberList.length; i++) {
            if (members[memberList[i]].isActive) {
                ac++;
            }
        }

        address[] memory activeAddrs = new address[](ac);

        uint256 count = 0;
        for (uint256 i = 0; i < memberList.length; i++) {
            if (members[memberList[i]].isActive) {
                activeAddrs[count] = memberList[i];
                count++;
            }
        }

        return activeAddrs;
    }

    function getActiveMembers() public view returns (Member[] memory) {
        uint256 ac = 0;
        for (uint256 i = 0; i < memberList.length; i++) {
            if (members[memberList[i]].isActive) {
                ac++;
            }
        }

        Member[] memory activeMembers = new Member[](ac);

        uint256 count = 0;
        for (uint256 i = 0; i < memberList.length; i++) {
            if (members[memberList[i]].isActive) {
                activeMembers[i] =  members[memberList[i]];
                count++;
            }
        }
        return activeMembers;
    }

    function getMemberCount() public view returns (uint256) {
        return memberCount;
    }

    function getActiveCount() public view returns (uint256) {
        uint256 ac = 0;
        for (uint256 i = 0; i < memberList.length; i++) {
            if (members[memberList[i]].isActive) {
                ac++;
            }
        }

        return ac;
    }

    function pause() public onlyAdmin {
        paused = true;
        emit ContractPaused();
    }

    function unpause() public onlyAdmin {
        paused = false;
        emit ContractUnpaused();
    }

    function importBulk(address[] memory _addresses, string[] memory _names, string[] memory _emails, string[] memory _phones, string[] memory _regnos, uint256[] memory _timestamp) public onlyAdmin { 
        require(_addresses.length == _names.length && _names.length == _emails.length && _emails.length == _phones.length && _phones.length == _regnos.length, "Invalid input");
        for (uint256 i = 0; i < _addresses.length; i++) {
            memberCount++;
            members[_addresses[i]] = Member({
                id: memberCount,
                walletAddress: _addresses[i],
                name: _names[i],
                regno: _regnos[i],
                email: _emails[i],
                phone: _phones[i],
                message: "",
                enrollmentTime: _timestamp[i],
                isActive: true
            });

            memberList.push(_addresses[i]);
            allMembers.push(members[_addresses[i]]);
        }
    }

    function importOne(address _address, string memory _name, string memory _email, string memory _phone, string memory _regno, uint256 _timestamp) public onlyAdmin {
        memberCount++;
        members[_address] = Member({
            id: memberCount,
            walletAddress: _address,
            name: _name,
            regno: _regno,
            email: _email,
            phone: _phone,
            message: "",
            enrollmentTime: _timestamp,
            isActive: true
        });

        memberList.push(_address);
        allMembers.push(members[_address]);
    }
}
