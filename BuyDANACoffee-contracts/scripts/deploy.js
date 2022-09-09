// scripts/deploy.js

const hre = require("hardhat");

async function main() {
  // We get the contract to deploy.
  const BuyDANACoffee = await hre.ethers.getContractFactory("BuyDANACoffee");
  const buyDANACoffee = await BuyDANACoffee.deploy();

  await buyDANACoffee.deployed();

  console.log("BuyDANACoffee deployed to:", buyDANACoffee.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
