const main = async () => {
    
    // owner => retrieves the address of the contract owner
    // randomPerson => grabs a random wallet address from ethers
    const [owner, randomPerson] = await hre.ethers.getSigners();

    // Compile my smart contract
    const waveContractFactory = await hre.ethers.getContractFactory("WaveMessenger");

    // Deploy contract
    const waveContract = await waveContractFactory.deploy();

    // Proceed when it's successfully deployed
    await waveContract.deployed();

    console.log("\nContract deployed to:", waveContract.address);

    console.log("\nContract deployed by:", owner.address);

    // run contract functions
    let waveCount;
    waveCount = await waveContract.getTotalWaves();
    console.log(waveCount.toNumber());


    // allow me to wave
    let waveTxn = await waveContract.wave("Test Message!");
    await waveTxn.wait(); // wait for the txn to be mined

    // allow anonymous user wave at me
    waveTxn = await waveContract.connect(randomPerson).wave("Anonymous Test Message!");
    await waveTxn.wait(); // wait for the txn to be mined

    waveCount = await waveContract.getTotalWaves();

    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);
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