import { ethers } from 'hardhat-ethers';
import Database from '../../blockchain/artifacts/contracts/Database.sol/Database.json';

export const loadContract = (address: string, signer: ethers.providers.JsonRpcSigner) => {
  return new ethers.Contract(address, Database.abi, signer);
};  
