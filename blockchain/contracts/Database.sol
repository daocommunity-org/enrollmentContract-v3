// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract DAOEnrollment {
    struct Member {
        uint256 id;
        address walletAddress;
        string name;
        string regno;
        string email;
        uint256 phone;
        string message;
        uint256 enrollmentTime;
        bool isActive;
    }

    uint256 private memberCount;
    mapping(address => Member) public members;
    address[] public memberList;
    mapping(address => bool) public admins;
    bool public paused;

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

    function enroll(string memory _name, string memory _email, string memory _phone, string memory _regno, string memory _msg) public whenNotPaused {
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

        emit MemberEnrolled(msg.sender, _name, memberCount);
    }

    function updateMemberInfo(string memory _name, string memory _email, string memory _phoneNumber) public whenNotPaused {
        require(members[msg.sender].isActive, "Not enrolled");
        members[msg.sender].name = _name;
        members[msg.sender].email = _email;
        members[msg.sender].phone = _phoneNumber;
        emit MemberUpdated(msg.sender, _name);
    }

    function removeMember(address _address) public whenNotPaused {
        require(members[msg.sender].isActive, "Not enrolled");
        require(isAdmin[msg.sender], "Only admins can remove members");
        for (uint256 i = 0; i < memberList.length; i++) {
            if (memberList[i] == _address) {
                for (uint256 j = i; j < memberList.length - 1; j++) {
                    memberList[j] = memberList[j + 1];
                }
                memberList.pop();
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

    function getMemberInfo(address _member) public view returns (Member memory) {
        require(members[_member].isActive, "Member not active");
        return members[_member];
    }

    function getAllMembers() public view returns (address[] memory) {
        return memberList;
    }

    function getMemberCount() public view returns (uint256) {
        return memberCount;
    }

    function pause() public onlyAdmin {
        paused = true;
        emit ContractPaused();
    }

    function unpause() public onlyAdmin {
        paused = false;
        emit ContractUnpaused();
    }
}