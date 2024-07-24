import { ethers } from 'hardhat';

async function main() {
  const Database = await ethers.getContractFactory("Database");
  const database = await Database.deploy("Hello, Blockchain!");

  await database.deployed();

  console.log("Database deployed to:", database.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
