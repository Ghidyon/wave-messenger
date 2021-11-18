const main = async () => {

    // Get Contract
    const waveContractFactory = await hre.ethers.getContractFactory("WaveMessenger");
    
    // Deploy contract
    const waveContract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther('0.001'),
    });
    
    // Proceed when contract is deployed
    await waveContract.deployed();

    console.log("WaveMessenger Address: ", waveContract.address);
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