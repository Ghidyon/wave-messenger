const main = async () => {
    
    // owner => retrieves the address of the contract owner
    // randomPerson => grabs a random wallet address from ethers
    const [owner, randomPerson] = await hre.ethers.getSigners();

    // Compile my smart contract
    const waveContractFactory = await hre.ethers.getContractFactory("WaveMessenger");

    // Deploy contract funding it with 0.1 ETH
    const waveContract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther("0.1")
    });

    // Proceed when it's successfully deployed
    await waveContract.deployed();

    console.log("\nContract address:", waveContract.address);

    console.log("\nContract deployed by:", owner.address);

    /* Get Contract Balance */
    let contractBalance = await hre.ethers.provider.getBalance(waveContract.address);

    console.log(
        "Contract balance",
        hre.ethers.utils.formatEther(contractBalance)
    )

    // allow me to wave
    let waveTxn = await waveContract.wave("Wave1 Test Message!");
    await waveTxn.wait(); // wait for the txn to be mined

    // allow anonymous user wave at me
    waveTxn = await waveContract.connect(randomPerson).wave("Wave2 Anonymous Test Message!");
    await waveTxn.wait(); // wait for the txn to be mined

    // Get contract balance again to see what happened
    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);

    console.log(
        'Contract balance:',
        hre.ethers.utils.formatEther(contractBalance)
    );

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