require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/IxAxm2Cpz1jHcaOmsECdMDnqxTCqGB90",
      accounts: ["3b034fa9e0819423aadb26bb31f07b921b8810086c8c0afe0d98c7a8b2e1d148"]
    }
  }
};

// Deploying contracts with account:  0xB5de838DCd30bAf519afD150e99E68c2Da9743aC
// Account Balance:  99884769498708617
// WaveMessenger Address:  0xD8Ae80255c25Bc5beF22148701465a102df63515
