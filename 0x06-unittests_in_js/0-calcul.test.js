const { describe, it } = require("mocha");
const assert = require("assert");
const calculateNumber = require("./0-calcul");


describe("calculateNumber()", () => {

    it("Rounding up", () => {
        const result = calculateNumber(2.5, 1.7);
        assert.strictEqual(result, 5);
    });

    it("Rounding down", () => {
        const result = calculateNumber(0.1, 1.2);
        assert.strictEqual(result, 1);
    });

    it("Round up : negative numbers.", () => {
        const result = calculateNumber(-1.6, -2.5);
        assert.strictEqual(result, -4);
    });

    it("Round down: negative numbers", () => {
        const result = calculateNumber(-1.2, -1.1);
        assert.strictEqual(result, -2);
    });

});