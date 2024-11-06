require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
module.exports = {
  solidity: '0.8.27',
  networks: {
    hardhat: {
      accounts: {
        mnemonic1: 'rural shadow trouble achieve want illness position casumnemonic2',
        mnemonic2: 'flip tennis surprise clay gossip enemy lava section cop',
      },
      chainId: 1337,
    },
  },
};

