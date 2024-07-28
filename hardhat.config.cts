/** @type import('hardhat/config').HardhatUserConfig */


const config = {
  solidity: "0.8.24",
  paths: {
    root: "./blockchain",
    sources: "./contracts",
    tests: "./tests",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};

export default config;