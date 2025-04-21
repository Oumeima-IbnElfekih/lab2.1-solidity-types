

require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
console.log(`SEPOLIA_RPC_URL: ${process.env.SEPOLIA_RPC_URL}`);


module.exports = {

  solidity: "0.8.20",

  networks: {

    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
     // url:`https://sepolia.infura.io/v3/YOUR_INFURA_KEY`,

      accounts:[`0x${process.env.YOUR_PRIVATE_KEY}`],

    },

  },

};