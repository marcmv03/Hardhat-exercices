const { ethers } = require('hardhat');
const { expect } = require('chai');
describe('Counter', () => {
    let Counter;
    let counter;

    beforeEach(async () => {
        Counter = await ethers.getContractFactory("Counter");
        counter = await Counter.deploy();
        await counter.waitForDeployment();
    });

    it('should start with a count of 0', async () => {
        expect(await counter.get()).to.equal(0);
    });

    it('should increment the count', async () => {
        await counter.inc();
        expect(await counter.get()).to.equal(1);
    });

    it('should decrement the count', async () => {
        await counter.inc();
        await counter.dec();
        expect(await counter.get()).to.equal(0);
    });
}) 