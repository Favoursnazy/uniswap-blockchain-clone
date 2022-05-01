const main = async () => {
    const transactionFactory = await hre.ethers.getContractFactory("Transactions");
    const transactionContract = await transactionFactory.deploy();

    await transactionContract.deployed()

    console.log("Transactions.sol contract deployed to:", transactionContract.address)
};(async () => {
    try {
        await main()
        process.exit()
    } catch (error) {
        console.error(error);
        process.exit();
    }
})()