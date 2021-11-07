const main = async () => {

    const [deployer] = await hre.ethers.getSigners();

    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account Balance: ", accountBalance.toString());

    // Get Contract as token
    const Token = await hre.ethers.getContractFactory("WavePortal");

    // Deploy contract
    const portal = await Token.deploy();

    // Proceed when contract is deployed
    await portal.deployed();

    console.log("WaveMessenger Address: ", portal.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();