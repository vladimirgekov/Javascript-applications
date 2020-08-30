function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}


const expect = require('chai').expect;

describe('lookupChar', function () {
    it('should return undefined with a non-string first parameter', function () {
        expect(lookupChar(1, 0)).to.equal(undefined, "incorrect result");
    });

    it('should return undefined with a non-number second parameter', function () {
        expect(lookupChar('cat', "dog")).to.equal(undefined, "incorrect result");
    });

    it('should return undefined with a floating point second parameter', function () {
        expect(lookupChar("cat", 3.14)).to.equal(undefined, "incorrect result");
    });


    it('should return undefined with an out-of-bounds index as second parameter', function () {
        expect(lookupChar("cat", 7)).to.equal("Incorrect index", "incorrect result");
    });

    it('should return undefined with a negative index as second parameter', function () {
        expect(lookupChar("cat", -1)).to.equal("Incorrect index", "incorrect result");
    });

    it('should return undefined with an index equal to string length', function () {
        expect(lookupChar("cat", 3)).to.equal("Incorrect index", "incorrect result");
    });


    it('should return correct result with correct parameters', function () {
        expect(lookupChar("cat", 0)).to.equal("c", "incorrect result");
    });

    it('should return correct result with correct parameters', function () {
        expect(lookupChar("cat", 2)).to.equal("t", "incorrect result");
    });


});
