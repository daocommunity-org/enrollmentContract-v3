/** @type import('hardhat/config').HardhatUserConfig */

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "./hardhat-scripts.cts";

const config:HardhatUserConfig = {
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