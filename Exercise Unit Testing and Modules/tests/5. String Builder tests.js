const expect = require("chai").expect;
const assert = require("chai").assert;
const stringBuilder = require("../5. String Builder").stringBuilder;

describe('string builder', function () {
    const input = "testtest";
    let sb;

    beforeEach(() => {
        sb = new stringBuilder(input);
    })

    describe('initialization', function () {
        it('should set the sb to empty if the input is not valid', function () {
            const sb = new stringBuilder(undefined);

            expect(sb._stringArray).to.empty;
        });

        it('should set the sb to the array created from the input string if the input is alright', function () {
            expect(sb._stringArray.length).to.equal(input.length);
        });
    });

    describe('append', function () {
        it("should add the current input at the end of string array", function () {
            const curInput = "1230";
            sb.append(curInput);
            const result = sb.toString();

            expect(result.length).to.equal(curInput.length + input.length);
            assert.isTrue(result.endsWith(curInput));
        });
    });

    describe('prepend', function () {
        it("should add the current input at the beginning of the array", function () {
            const curInput = "1230";
            sb.prepend(curInput);
            const result = sb.toString();

            expect(result.length).to.equal(curInput.length + input.length);
            assert.isTrue(result.startsWith(curInput));
        });
    });

    describe('insertAt', function () {
        it('should insert correctly the input', function () {
            const curInput = "0";
            const index = 2;

            sb.insertAt(curInput, index);
            const result = sb.toString();

            assert.isTrue(result.includes(curInput));
            expect(result.indexOf(curInput)).to.equal(index);
        });
    });

    describe('remove', function () {
        it('should remove correctly', function () {
            const stringToRemove = sb.toString().slice(0, 4);
            sb.remove(0, 4);

            const res = sb.toString();

            assert.isTrue(res.length === stringToRemove.length);
        });
    });

    describe('toString', function () {
        it('should return sb toString()', function () {
            expect(sb.toString()).to.equal(input);
        });
    });

    describe('_vrfyParam', function () {
        it('should throw an error with the correct type and message', function () {
            expect(() => stringBuilder._vrfyParam(["StackOverShrek"])).throws(TypeError, 'Argument must be string');
        });
    });
});