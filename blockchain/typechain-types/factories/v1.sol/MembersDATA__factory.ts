/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  MembersDATA,
  MembersDATAInterface,
} from "../../v1.sol/MembersDATA";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "check",
        type: "address",
      },
    ],
    name: "Enrolled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allMembers",
    outputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timeEnrolled",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "uid",
        type: "string",
      },
      {
        internalType: "string",
        name: "officialEmail",
        type: "string",
      },
      {
        internalType: "string",
        name: "phoneNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "whatsappNumber",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "counter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_uid",
        type: "string",
      },
      {
        internalType: "string",
        name: "_officialEmail",
        type: "string",
      },
      {
        internalType: "string",
        name: "_phoneNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "_whatsappNumber",
        type: "string",
      },
    ],
    name: "delegateEnrollMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "deleteMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_uid",
        type: "string",
      },
      {
        internalType: "string",
        name: "_officialEmail",
        type: "string",
      },
      {
        internalType: "string",
        name: "_phoneNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "_whatsappNumber",
        type: "string",
      },
    ],
    name: "enrollMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllMembers",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeEnrolled",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "walletAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "uid",
            type: "string",
          },
          {
            internalType: "string",
            name: "officialEmail",
            type: "string",
          },
          {
            internalType: "string",
            name: "phoneNumber",
            type: "string",
          },
          {
            internalType: "string",
            name: "whatsappNumber",
            type: "string",
          },
        ],
        internalType: "struct MembersDATA.MemberProfile[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "makeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_uid",
        type: "string",
      },
      {
        internalType: "string",
        name: "_officialEmail",
        type: "string",
      },
      {
        internalType: "string",
        name: "_phoneNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "_whatsappNumber",
        type: "string",
      },
    ],
    name: "migrationMethod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080819055506001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506129758061007f6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80637c0f6b35116100665780637c0f6b351461011e57806388bec9da1461013c578063c032993914610158578063f65496d014610174578063fd0717bd1461019057610093565b8063431f23cb14610098578063472905ca146100b45780636132d0e5146100d057806361bc221a14610100575b600080fd5b6100b260048036038101906100ad91906118b6565b6101c7565b005b6100ce60048036038101906100c991906119e7565b6105fa565b005b6100ea60048036038101906100e591906119e7565b6106e8565b6040516100f79190611a2f565b60405180910390f35b61010861073e565b6040516101159190611a63565b60405180910390f35b610126610744565b6040516101339190611cba565b60405180910390f35b61015660048036038101906101519190611d08565b610ae8565b005b610172600480360381019061016d9190611e65565b610b80565b005b61018e60048036038101906101899190611fa7565b610dd2565b005b6101aa60048036038101906101a59190611d08565b611178565b6040516101be98979695949392919061211d565b60405180910390f35b8a600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610255576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024c90612230565b60405180910390fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166102e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d89061229c565b60405180910390fd5b6001600260008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600160405180610100016040528060005481526020014281526020018e73ffffffffffffffffffffffffffffffffffffffff1681526020018d8d8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505081526020018b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200189898080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200187878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508152509080600181540180825580915050600190039060005260206000209060080201600090919091909150600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301908161057a91906124c8565b50608082015181600401908161059091906124c8565b5060a08201518160050190816105a691906124c8565b5060c08201518160060190816105bc91906124c8565b5060e08201518160070190816105d291906124c8565b5050506000808154809291906105e7906125c9565b9190505550505050505050505050505050565b60011515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461068d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106849061265d565b60405180910390fd5b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60005481565b60606001805480602002602001604051908101604052809291908181526020016000905b82821015610adf57838290600052602060002090600802016040518061010001604052908160008201548152602001600182015481526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382018054610806906122eb565b80601f0160208091040260200160405190810160405280929190818152602001828054610832906122eb565b801561087f5780601f106108545761010080835404028352916020019161087f565b820191906000526020600020905b81548152906001019060200180831161086257829003601f168201915b50505050508152602001600482018054610898906122eb565b80601f01602080910402602001604051908101604052809291908181526020018280546108c4906122eb565b80156109115780601f106108e657610100808354040283529160200191610911565b820191906000526020600020905b8154815290600101906020018083116108f457829003601f168201915b5050505050815260200160058201805461092a906122eb565b80601f0160208091040260200160405190810160405280929190818152602001828054610956906122eb565b80156109a35780601f10610978576101008083540402835291602001916109a3565b820191906000526020600020905b81548152906001019060200180831161098657829003601f168201915b505050505081526020016006820180546109bc906122eb565b80601f01602080910402602001604051908101604052809291908181526020018280546109e8906122eb565b8015610a355780601f10610a0a57610100808354040283529160200191610a35565b820191906000526020600020905b815481529060010190602001808311610a1857829003601f168201915b50505050508152602001600782018054610a4e906122eb565b80601f0160208091040260200160405190810160405280929190818152602001828054610a7a906122eb565b8015610ac75780601f10610a9c57610100808354040283529160200191610ac7565b820191906000526020600020905b815481529060010190602001808311610aaa57829003601f168201915b50505050508152505081526020019060010190610768565b50505050905090565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610b74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6b9061229c565b60405180910390fd5b610b7d81611498565b50565b60011515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610c13576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0a906126ef565b60405180910390fd5b6001600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060016040518061010001604052808a81526020018981526020018873ffffffffffffffffffffffffffffffffffffffff168152602001878152602001868152602001858152602001848152602001838152509080600181540180825580915050600190039060005260206000209060080201600090919091909150600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003019081610d5691906124c8565b506080820151816004019081610d6c91906124c8565b5060a0820151816005019081610d8291906124c8565b5060c0820151816006019081610d9891906124c8565b5060e0820151816007019081610dae91906124c8565b505050600080815480929190610dc3906125c9565b91905055505050505050505050565b33600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610e60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5790612230565b60405180910390fd5b6001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600160405180610100016040528060005481526020014281526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018d8d8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505081526020018b8b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200189898080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200187878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508152509080600181540180825580915050600190039060005260206000209060080201600090919091909150600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030190816110f991906124c8565b50608082015181600401908161110f91906124c8565b5060a082015181600501908161112591906124c8565b5060c082015181600601908161113b91906124c8565b5060e082015181600701908161115191906124c8565b505050600080815480929190611166906125c9565b91905055505050505050505050505050565b6001818154811061118857600080fd5b90600052602060002090600802016000915090508060000154908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030180546111dd906122eb565b80601f0160208091040260200160405190810160405280929190818152602001828054611209906122eb565b80156112565780601f1061122b57610100808354040283529160200191611256565b820191906000526020600020905b81548152906001019060200180831161123957829003601f168201915b50505050509080600401805461126b906122eb565b80601f0160208091040260200160405190810160405280929190818152602001828054611297906122eb565b80156112e45780601f106112b9576101008083540402835291602001916112e4565b820191906000526020600020905b8154815290600101906020018083116112c757829003601f168201915b5050505050908060050180546112f9906122eb565b80601f0160208091040260200160405190810160405280929190818152602001828054611325906122eb565b80156113725780601f1061134757610100808354040283529160200191611372565b820191906000526020600020905b81548152906001019060200180831161135557829003601f168201915b505050505090806006018054611387906122eb565b80601f01602080910402602001604051908101604052809291908181526020018280546113b3906122eb565b80156114005780601f106113d557610100808354040283529160200191611400565b820191906000526020600020905b8154815290600101906020018083116113e357829003601f168201915b505050505090806007018054611415906122eb565b80601f0160208091040260200160405190810160405280929190818152602001828054611441906122eb565b801561148e5780601f106114635761010080835404028352916020019161148e565b820191906000526020600020905b81548152906001019060200180831161147157829003601f168201915b5050505050905088565b60018054905081106114df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114d69061275b565b60405180910390fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661156b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115629061229c565b60405180910390fd5b60008190505b60018080549050611582919061277b565b8110156116cc576001808261159791906127af565b815481106115a8576115a76127e3565b5b9060005260206000209060080201600182815481106115ca576115c96127e3565b5b906000526020600020906008020160008201548160000155600182015481600101556002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600382018160030190816116679190612828565b506004820181600401908161167c9190612828565b50600582018160050190816116919190612828565b50600682018160060190816116a69190612828565b50600782018160070190816116bb9190612828565b509050508080600101915050611571565b5060018054806116df576116de612910565b5b600190038181906000526020600020906008020160008082016000905560018201600090556002820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560038201600061173b9190611782565b60048201600061174b9190611782565b60058201600061175b9190611782565b60068201600061176b9190611782565b60078201600061177b9190611782565b5050905550565b50805461178e906122eb565b6000825580601f106117a057506117bf565b601f0160209004906000526020600020908101906117be91906117c2565b5b50565b5b808211156117db5760008160009055506001016117c3565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061181e826117f3565b9050919050565b61182e81611813565b811461183957600080fd5b50565b60008135905061184b81611825565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261187657611875611851565b5b8235905067ffffffffffffffff81111561189357611892611856565b5b6020830191508360018202830111156118af576118ae61185b565b5b9250929050565b600080600080600080600080600080600060c08c8e0312156118db576118da6117e9565b5b60006118e98e828f0161183c565b9b505060208c013567ffffffffffffffff81111561190a576119096117ee565b5b6119168e828f01611860565b9a509a505060408c013567ffffffffffffffff811115611939576119386117ee565b5b6119458e828f01611860565b985098505060608c013567ffffffffffffffff811115611968576119676117ee565b5b6119748e828f01611860565b965096505060808c013567ffffffffffffffff811115611997576119966117ee565b5b6119a38e828f01611860565b945094505060a08c013567ffffffffffffffff8111156119c6576119c56117ee565b5b6119d28e828f01611860565b92509250509295989b509295989b9093969950565b6000602082840312156119fd576119fc6117e9565b5b6000611a0b8482850161183c565b91505092915050565b60008115159050919050565b611a2981611a14565b82525050565b6000602082019050611a446000830184611a20565b92915050565b6000819050919050565b611a5d81611a4a565b82525050565b6000602082019050611a786000830184611a54565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611ab381611a4a565b82525050565b611ac281611813565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b02578082015181840152602081019050611ae7565b60008484015250505050565b6000601f19601f8301169050919050565b6000611b2a82611ac8565b611b348185611ad3565b9350611b44818560208601611ae4565b611b4d81611b0e565b840191505092915050565b600061010083016000830151611b716000860182611aaa565b506020830151611b846020860182611aaa565b506040830151611b976040860182611ab9565b5060608301518482036060860152611baf8282611b1f565b91505060808301518482036080860152611bc98282611b1f565b91505060a083015184820360a0860152611be38282611b1f565b91505060c083015184820360c0860152611bfd8282611b1f565b91505060e083015184820360e0860152611c178282611b1f565b9150508091505092915050565b6000611c308383611b58565b905092915050565b6000602082019050919050565b6000611c5082611a7e565b611c5a8185611a89565b935083602082028501611c6c85611a9a565b8060005b85811015611ca85784840389528151611c898582611c24565b9450611c9483611c38565b925060208a01995050600181019050611c70565b50829750879550505050505092915050565b60006020820190508181036000830152611cd48184611c45565b905092915050565b611ce581611a4a565b8114611cf057600080fd5b50565b600081359050611d0281611cdc565b92915050565b600060208284031215611d1e57611d1d6117e9565b5b6000611d2c84828501611cf3565b91505092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611d7282611b0e565b810181811067ffffffffffffffff82111715611d9157611d90611d3a565b5b80604052505050565b6000611da46117df565b9050611db08282611d69565b919050565b600067ffffffffffffffff821115611dd057611dcf611d3a565b5b611dd982611b0e565b9050602081019050919050565b82818337600083830152505050565b6000611e08611e0384611db5565b611d9a565b905082815260208101848484011115611e2457611e23611d35565b5b611e2f848285611de6565b509392505050565b600082601f830112611e4c57611e4b611851565b5b8135611e5c848260208601611df5565b91505092915050565b600080600080600080600080610100898b031215611e8657611e856117e9565b5b6000611e948b828c01611cf3565b9850506020611ea58b828c01611cf3565b9750506040611eb68b828c0161183c565b965050606089013567ffffffffffffffff811115611ed757611ed66117ee565b5b611ee38b828c01611e37565b955050608089013567ffffffffffffffff811115611f0457611f036117ee565b5b611f108b828c01611e37565b94505060a089013567ffffffffffffffff811115611f3157611f306117ee565b5b611f3d8b828c01611e37565b93505060c089013567ffffffffffffffff811115611f5e57611f5d6117ee565b5b611f6a8b828c01611e37565b92505060e089013567ffffffffffffffff811115611f8b57611f8a6117ee565b5b611f978b828c01611e37565b9150509295985092959890939650565b60008060008060008060008060008060a08b8d031215611fca57611fc96117e9565b5b60008b013567ffffffffffffffff811115611fe857611fe76117ee565b5b611ff48d828e01611860565b9a509a505060208b013567ffffffffffffffff811115612017576120166117ee565b5b6120238d828e01611860565b985098505060408b013567ffffffffffffffff811115612046576120456117ee565b5b6120528d828e01611860565b965096505060608b013567ffffffffffffffff811115612075576120746117ee565b5b6120818d828e01611860565b945094505060808b013567ffffffffffffffff8111156120a4576120a36117ee565b5b6120b08d828e01611860565b92509250509295989b9194979a5092959850565b6120cd81611813565b82525050565b600082825260208201905092915050565b60006120ef82611ac8565b6120f981856120d3565b9350612109818560208601611ae4565b61211281611b0e565b840191505092915050565b600061010082019050612133600083018b611a54565b612140602083018a611a54565b61214d60408301896120c4565b818103606083015261215f81886120e4565b9050818103608083015261217381876120e4565b905081810360a083015261218781866120e4565b905081810360c083015261219b81856120e4565b905081810360e08301526121af81846120e4565b90509998505050505050505050565b7f546869732077616c6c65742068617320616c7265616479206265656e2061646460008201527f6564000000000000000000000000000000000000000000000000000000000000602082015250565b600061221a6022836120d3565b9150612225826121be565b604082019050919050565b600060208201905081810360008301526122498161220d565b9050919050565b7f4f6e6c792061646d696e732063616e20696e766f6b6500000000000000000000600082015250565b60006122866016836120d3565b915061229182612250565b602082019050919050565b600060208201905081810360008301526122b581612279565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061230357607f821691505b602082108103612316576123156122bc565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261237e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612341565b6123888683612341565b95508019841693508086168417925050509392505050565b6000819050919050565b60006123c56123c06123bb84611a4a565b6123a0565b611a4a565b9050919050565b6000819050919050565b6123df836123aa565b6123f36123eb826123cc565b84845461234e565b825550505050565b600090565b6124086123fb565b6124138184846123d6565b505050565b5b818110156124375761242c600082612400565b600181019050612419565b5050565b601f82111561247c5761244d8161231c565b61245684612331565b81016020851015612465578190505b61247961247185612331565b830182612418565b50505b505050565b600082821c905092915050565b600061249f60001984600802612481565b1980831691505092915050565b60006124b8838361248e565b9150826002028217905092915050565b6124d182611ac8565b67ffffffffffffffff8111156124ea576124e9611d3a565b5b6124f482546122eb565b6124ff82828561243b565b600060209050601f8311600181146125325760008415612520578287015190505b61252a85826124ac565b865550612592565b601f1984166125408661231c565b60005b8281101561256857848901518255600182019150602085019450602081019050612543565b868310156125855784890151612581601f89168261248e565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006125d482611a4a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036126065761260561259a565b5b600182019050919050565b7f4f6e6c792041646d696e732063616e20696e766f6b6500000000000000000000600082015250565b60006126476016836120d3565b915061265282612611565b602082019050919050565b600060208201905081810360008301526126768161263a565b9050919050565b7f4f6e6c792061646d696e732063616e206163636573732074686973206d65746860008201527f6f64000000000000000000000000000000000000000000000000000000000000602082015250565b60006126d96022836120d3565b91506126e48261267d565b604082019050919050565b60006020820190508181036000830152612708816126cc565b9050919050565b7f696e646578206f7574206f6620626f756e640000000000000000000000000000600082015250565b60006127456012836120d3565b91506127508261270f565b602082019050919050565b6000602082019050818103600083015261277481612738565b9050919050565b600061278682611a4a565b915061279183611a4a565b92508282039050818111156127a9576127a861259a565b5b92915050565b60006127ba82611a4a565b91506127c583611a4a565b92508282019050808211156127dd576127dc61259a565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081549050612821816122eb565b9050919050565b81810361283657505061290e565b61283f82612812565b67ffffffffffffffff81111561285857612857611d3a565b5b61286282546122eb565b61286d82828561243b565b6000601f83116001811461289c576000841561288a578287015490505b61289485826124ac565b865550612907565b601f1984166128aa8761231c565b96506128b58661231c565b60005b828110156128dd578489015482556001820191506001850194506020810190506128b8565b868310156128fa57848901546128f6601f89168261248e565b8355505b6001600288020188555050505b5050505050505b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea26469706673582212208fd956c72416778f3d302cbebe288b1d7a5b8609cb919102081968400ea2a34064736f6c63430008180033";

type MembersDATAConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MembersDATAConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MembersDATA__factory extends ContractFactory {
  constructor(...args: MembersDATAConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MembersDATA & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MembersDATA__factory {
    return super.connect(runner) as MembersDATA__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MembersDATAInterface {
    return new Interface(_abi) as MembersDATAInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MembersDATA {
    return new Contract(address, _abi, runner) as unknown as MembersDATA;
  }
}
