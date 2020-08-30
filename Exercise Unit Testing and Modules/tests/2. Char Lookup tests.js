const expect = require("chai").expect;

const lookupChar = require("../2. Char Lookup").lookupChar;

describe('lookupChar', function () {
    it('should return undefined if the first arg is not a string', function () {
        const actual = lookupChar(55, 2);

        expect(actual).to.be.undefined;
    });

    it('should return undefined if the second arg is not a number', function () {
        const actual = lookupChar("test", "test");

        expect(actual).to.be.undefined;
    });

    it('should return undefined if the index arg is not an integer', function () {
        const actual = lookupChar("test", 5.55);

        expect(actual).to.be.undefined;
    });

    it('should return Incorrect index when index arg is out of range', function () {
        const actual = lookupChar("test", 200);

        expect(actual).to.equal("Incorrect index");
    });

    it('should return Incorrect index when the index arg is negative', function () {
        const actual = lookupChar("test", -55);

        expect(actual).to.equal("Incorrect index");
    });

    it('should return the char at the given index if the input is alright', function () {
        const string = "test";
        const actual = lookupChar(string, 2);
        const expected = string.charAt(2);

        expect(actual).to.equal(expected);
    });
});