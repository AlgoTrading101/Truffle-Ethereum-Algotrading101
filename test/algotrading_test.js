const Algotrading101 = artifacts.require("Algotrading101");

contract("Algotrading101", accounts => {
    it("returns a greeting", () => {
        let instance = await Algotrading101.deployed();
        let greeting = await instance.message();
        assert.equal(greeting, "Hello Algotraders!");
    })
})
