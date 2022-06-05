const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const trackerContractFactory = await hre.ethers.getContractFactory("Tracker");
    const trackerContract = await trackerContractFactory.deploy();
    await trackerContract.deployed();

    console.log("Contract deployed to:", trackerContract.address);

    console.log("Contract deployed by:", owner.address);

    let dayCount;
    dayCount = await trackerContract.getTotalDays();
  
    let dayTxn = await trackerContract.totaldays();
    await dayTxn.wait();
  
    dayCount = await trackerContract.getTotalDays();

    dayTxn = await trackerContract.connect(randomPerson).totaldays();
    await dayTxn.wait();

    dayCount = await trackerContract.getTotalDays();
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