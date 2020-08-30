const expect = require('chai').expect;
const assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}


describe('isOddOrEven', function(){
    it('should return undefined with a number parameter', function(){
        expect(isOddOrEven(13)).to.be.equal(undefined);
    });

    it('should return undefined with an object parameter', function(){
        expect(isOddOrEven({name: "george"})).to.be.equal(undefined);
    });

    it('should return correct result with even length', function(){
        assert.equal(isOddOrEven("roar"), "even");
    });

    it('should return correct result with odd length', function(){
       expect(isOddOrEven("Peter")).to.be.equal("odd");
    });

});

