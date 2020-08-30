const expect = require("chai").expect;
const assert = require("chai").assert;

const paymentPackage = require("../6. Payment Package").paymentPackage;

describe('payment package', function () {
    const name = "Nakov";
    const value = 100;
    let validPaymentPackage;

    beforeEach(() => {
        validPaymentPackage = new paymentPackage(name, value);
    })

    describe('constructor', function () {
        it('should match name and value from the input', function () {
            expect(validPaymentPackage._name).to.equal(name);
            expect(validPaymentPackage._value).to.equal(value);
        });

        it('should set the default values properly', function () {
            expect(validPaymentPackage.VAT).to.equal(20);
            expect(validPaymentPackage.active).to.equal(true);
        });
    });

    describe('name', function () {
        it('should throw an error if the name is not a string', function () {
            expect(() => validPaymentPackage.name = ["Array"])
                .throws(Error, /^Name must be a non-empty string$/g)
        });

        it('should throw an error if the name is an empty string', function () {
            expect(() => validPaymentPackage.name = "")
                .throws(Error, /^Name must be a non-empty string$/g)
        });

        it('should set the name correctly', function () {
            validPaymentPackage.name = "Pesho";

            expect(validPaymentPackage._name).to.equal("Pesho");
        });

        it('should get the name correctly', function () {
            expect(validPaymentPackage.name).to.equal(name);
        });
    });

    describe('value', function () {
        it('should throw an error if the value is not a number', function () {
            expect(() => validPaymentPackage.value = "Pesho")
                .throws(Error, /^Value must be a non-negative number$/g);
        });

        it('should throw an error if the value is negative', function () {
            expect(() => validPaymentPackage.value = -555)
                .throws(Error, /^Value must be a non-negative number$/g);
        });

        it('should set the value correctly', function () {
            validPaymentPackage.value = 555;

            expect(validPaymentPackage._value).to.equal(555);
        });

        it('should get the value correctly', function () {
            expect(validPaymentPackage.value).to.equal(value);
        });
    });

    describe('VAT', function () {
        it('should throw an error if the VAT in the setter is not type of a number', function () {
            expect(() => validPaymentPackage.VAT = "Pesho")
                .throws(Error, /^VAT must be a non-negative number$/g);
        });

        it('should throw an error if the VAT in the setter is negative', function () {
            expect(() => validPaymentPackage.VAT = -555)
                .throws(Error, /^VAT must be a non-negative number$/g);
        });

        it('should set the newValue correctly', function () {
            validPaymentPackage.VAT = 30;

            expect(validPaymentPackage._VAT).to.equal(30);
        });

        it('should get the VAT properly', function () {
            expect(validPaymentPackage.VAT).to.equal(20); 
        });
    });

    describe('active', function () {
        it("should throw an error if the active is not a boolean", function () {
            expect(() => validPaymentPackage.active = "Pesho")
                .throws(Error, /^Active status must be a boolean$/g);
        });

        it('should set the active property correcly', function () {
            validPaymentPackage.active = false;

            expect(validPaymentPackage._active).to.equal(false);
        });

        it('should get the active property correctly', function () {
            validPaymentPackage._active = false;

            assert.isFalse(validPaymentPackage.active);
        });
    });

    describe('toString', function () {
        it('should return the correct output', function () {
            const expected = `Package: ${validPaymentPackage.name}` + (validPaymentPackage.active === false ? ' (inactive)' : '') + "\n" +
                `- Value (excl. VAT): ${validPaymentPackage.value}\n` +
                `- Value (VAT ${validPaymentPackage.VAT}%): ${validPaymentPackage.value * (1 + validPaymentPackage.VAT / 100)}`

            const actual = validPaymentPackage.toString();

            assert.equal(actual, expected);
        });
    });
});