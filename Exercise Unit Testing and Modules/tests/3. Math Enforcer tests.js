const expect = require("chai").expect;

const mathEnforcer = require("../3. Math Enforcer").mathEnforcer;

describe('mathenforcer', function () {
    describe('add five', function () {
        it('should return undefined if the input is not a number', function () {
            const actual = mathEnforcer.addFive("test");

            expect(actual).to.be.undefined;
        });

        it('should return the input + five, if the input is a number', function () {
            const integer = mathEnforcer.addFive(5);
            const decimal = mathEnforcer.addFive(5.1);
            const negative = mathEnforcer.addFive(-5);

            expect(integer).to.equal(10);
            expect(decimal).to.equal(10.1);
            expect(negative).to.equal(0);
        });
    });

    describe('subtract ten', function () {
        it('should return undefined if the input is not a number', function () {
            const actual = mathEnforcer.subtractTen("test");

            expect(actual).to.be.undefined;
        });

        it('should return the input - ten, if the input is a number', function () {
            const integer = mathEnforcer.subtractTen(20);
            const decimal = mathEnforcer.subtractTen(20.1)
            const negative = mathEnforcer.subtractTen(-20);

            expect(integer).to.equal(10);
            expect(decimal).to.equal(10.1);
            expect(negative).to.equal(-30);
        });
    });

    describe('sum', function () {
        it('should return undefined if the first input is not a number', function () {
            const actual = mathEnforcer.sum("test", 1);

            expect(actual).to.be.undefined;
        });

        it('should return undefined if the second input is not a number', function () {
            const actual = mathEnforcer.sum(1, "test");

            expect(actual).to.be.undefined;
        });

        it('should return the sum of the first and the second input if both are numbers', function () {
            const integer = mathEnforcer.sum(5, 5);
            const decimal = mathEnforcer.sum(5.1, 5.1);
            const negative = mathEnforcer.sum(-5, -5);

            expect(integer).to.equal(10);
            expect(decimal).to.equal(10.2);
            expect(negative).to.equal(-10);
        });
    });
});