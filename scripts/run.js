const main = async () => {
    
    // owner => retrieves the address of the contract owner
    // randomPerson => grabs a random wallet address from ethers
    const [owner, randomPerson] = await hre.ethers.getSigners();

    // Compile my smart contract
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");

    // Deploy contract
    const waveContract = await waveContractFactory.deploy();

    // Proceed when it's successfully deployed
    await waveContract.deployed();

    console.log("\nContract deployed to:", waveContract.address);

    console.log("\nContract deployed by:", owner.address);

    // run contract functions
    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    // allow me to wave
    let waveTxn = await waveContract.wave();
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();

    // allow anonymous user wave at me
    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();
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