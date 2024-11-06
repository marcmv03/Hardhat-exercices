const { ethers } = require('hardhat');
const { expect } = require('chai');

describe('Multiplier', () => {
    let Multiplier;
    let multiplier;

    beforeEach(async () => {
        Multiplier = await ethers.getContractFactory("Multiplier");
        multiplier = await Multiplier.deploy();
        await multiplier.waitForDeployment();
    });

    it('should start with a value of 1', async () => {
        expect(await multiplier.getValue()).to.equal(1);
    });

    it('should add one to the value', async () => {
        await multiplier.addOne();
        expect(await multiplier.getValue()).to.equal(2);
    });

    it('should multiply the value by three', async () => {
        await multiplier.multiplybythree();
        expect(await multiplier.getValue()).to.equal(3);
    });
});