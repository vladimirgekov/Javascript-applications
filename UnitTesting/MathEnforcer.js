let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


const expect = require('chai').expect;


describe('mathEnforcer', function(){
    describe('addFive', function(){
        it('should return undefined with a non-number (string) parameter', function () {
            expect(mathEnforcer.addFive('cat')).to.equal(undefined, "incorrect result");
        });

        it('should return undefined with a non-number {object} parameter', function () {
            expect(mathEnforcer.addFive({animal: "cat"})).to.equal(undefined, "incorrect result");
        });

        it('should return correct result with a positive number parameter', function () {
            expect(mathEnforcer.addFive(5)).to.equal(10, "incorrect result");
        });

        it('should return correct result with a negative number parameter', function () {
            expect(mathEnforcer.addFive(-5)).to.equal(0, "incorrect result");
        });

        it('should return correct result with a floating point number parameter', function () {
            expect(mathEnforcer.addFive(0.01)).to.be.closeTo(5.01, 0.01);
        });
    });


    describe('subtractTen', function(){
        it('should return undefined with a non-number (string) parameter', function () {
            expect(mathEnforcer.subtractTen('cat')).to.equal(undefined, "incorrect result");
        });

        it('should return undefined with a non-number {object} parameter', function () {
            expect(mathEnforcer.subtractTen({animal: "cat"})).to.equal(undefined, "incorrect result");
        });

        it('should return correct result with a  positive number parameter', function () {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5, "incorrect result");
        });

        it('should return correct result with a negative number parameter', function () {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15, "incorrect result");
        });

        it('should return correct result with a floating point number parameter', function () {
            expect(mathEnforcer.subtractTen(-5.5)).to.be.closeTo(-15.5, 0.01);
        });
    });

    describe('sum', function(){
        it('should return undefined with a non-number first parameter', function () {
            expect(mathEnforcer.sum('cat', 5)).to.equal(undefined, "incorrect result");
        });

        it('should return undefined with a non-number second parameter', function () {
            expect(mathEnforcer.sum(1, 'dog')).to.equal(undefined, "incorrect result");
        });

        it('should return correct result with two positive parameters', function () {
            expect(mathEnforcer.sum(5, 5)).to.equal(10, "incorrect result");
        });

        it('should return correct result with a first parameter as a negative number parameter', function () {
            expect(mathEnforcer.sum(-5, 5)).to.equal(0, "incorrect result");
        });

        it('should return correct result with a second parameter as a negative number parameter', function () {
            expect(mathEnforcer.sum(5, -5)).to.equal(0, "incorrect result");
        });

        it('should return correct result with two negative parameters', function () {
            expect(mathEnforcer.sum(-5, -5)).to.equal(-10, "incorrect result");
        });

        it('should return correct result with two floating point parameters', function () {
            expect(mathEnforcer.sum(-5.5, 5.5)).to.be.closeTo(0, 0.01);
        });
    });
})