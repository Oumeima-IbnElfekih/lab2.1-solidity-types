// npx hardhat run scripts/deploy.js
require('@nomicfoundation/hardhat-ethers');
const { ethers} = require("hardhat");
async function main() {

    const[deployer] = await ethers.getSigners();

    console.log("Déployé par : ", deployer.address);

    const Contract = await ethers.getContractFactory("Typessolidity");

    const contract = await Contract.deploy();

    console.log("Contrat déployé à l'adresse : ", contract.target);

}

main()

    .then(() => process.exit(0))

    .catch((error) => {

        console.error(error);

        process.exit(1);

    });