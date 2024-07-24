import { task } from "hardhat/config";
import fs from "fs";
import path from "path";

task("compile-and-extract-abi", "Compiles contracts and extracts ABIs")
  .setAction(async (_, hre) => {
    // Ensure the artifacts directory exists
    const artifactsDir = path.join(__dirname, "blockchain", "artifacts");
    if (!fs.existsSync(artifactsDir)) {
      fs.mkdirSync(artifactsDir, { recursive: true });
    }

    // Compile the contracts
    await hre.run("compile");

    // Get all compiled contract artifacts
    const artifactsPath = path.join(__dirname, "blockchain", "artifacts", "contracts");
    const files = fs.readdirSync(artifactsPath);

    for (const file of files) {
      if (file.endsWith(".json") && !file.endsWith(".dbg.json")) {
        const filePath = path.join(artifactsPath, file);
        const artifact = JSON.parse(fs.readFileSync(filePath, "utf8"));

        // Extract ABI
        const abi = JSON.stringify(artifact.abi, null, 2);

        // Create a new file with just the ABI
        const abiFileName = `${path.parse(file).name}.abi.json`;
        const abiFilePath = path.join(artifactsDir, abiFileName);
        fs.writeFileSync(abiFilePath, abi);

        console.log(`ABI extracted for ${file} and saved as ${abiFileName}`);
      }
    }

    console.log("Compilation and ABI extraction complete!");
  });