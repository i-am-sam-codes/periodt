const main = async () => {
    const trackerContractFactory = await hre.ethers.getContractFactory("Tracker");
    const trackerContract = await trackerContractFactory.deploy();
    await trackerContract.deployed();
    console.log("Contract deployed to:", trackerContract.address);
};

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();