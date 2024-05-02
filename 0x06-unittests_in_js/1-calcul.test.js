const { describe, it } = require("mocha");
const assert = require("assert");
const calculateNumber = require("./1-calcul");


describe("calculateNumber()", () => {

    it("Addition", () => {
        const result = calculateNumber("SUM", 2.5, 1.7);
        assert.strictEqual(result, 5);
    });

    it("Subtraction", () => {
        const result = calculateNumber("SUBTRACT", 1.1, 1.5);
        assert.strictEqual(result, -1);
    });

    it("Division by 0", () => {
        const result = calculateNumber("DIVIDE", 10, 0);
        assert.strictEqual(result, "Error");
    });
});