const { describe, it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToAPI", () => {
    it("test that Utils.calculateNumber was called once", () => {
        const spy = sinon.spy(Utils, "calculateNumber");

        sendPaymentRequestToApi(30, 13.24);

        assert(spy.calledOnce);
        spy.restart();
    });

});