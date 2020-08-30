const expect = require('chai').expect;
const StringBuilder = require('./StringBuilder');

describe('StringBuilder', function(){   
    describe('Instantiation and Structure', function(){
        it("should work when instantiated with a valid string", function (){
            expect(() => new StringBuilder('cat')).to.not.throw();
        });

        it("should work when instantiated with undefined", function (){
            expect(() => new StringBuilder()).to.not.throw();
        });
       
        it("should NOT work with when instantiated with invalid parameters", function (){
            expect(() => new StringBuilder(-5)).to.throw();
            expect(() => new StringBuilder({})).to.throw();
        });

        it("should have all properties", function (){
            const instance = new StringBuilder('cat');
            //expect(instance).to.have.own.property('_stringArray');
            expect(instance.hasOwnProperty('_stringArray')).to.equal(true);
        });

        it('should have all functions attached to the prototype', function(){
            const instance = new StringBuilder('cat');
            // expect(instance).to.have.property('append');
            // expect(instance).to.have.property('prepend');
            // expect(instance).to.have.property('insertAt');
            // expect(instance).to.have.property('remove');
            // expect(instance).to.have.property('toString');
            expect(Object.getPrototypeOf(instance).hasOwnProperty('append')).to.equal(true);
            expect(Object.getPrototypeOf(instance).hasOwnProperty('prepend')).to.equal(true);
            expect(Object.getPrototypeOf(instance).hasOwnProperty('insertAt')).to.equal(true);
            expect(Object.getPrototypeOf(instance).hasOwnProperty('remove')).to.equal(true);
            expect(Object.getPrototypeOf(instance).hasOwnProperty('toString')).to.equal(true);
        });

        it("should initialize the data with the correct type", function (){
            const instance = new StringBuilder();
            expect(instance._stringArray instanceof Array).to.equal(true);
            const secondInstance = new StringBuilder();
            expect(secondInstance._stringArray instanceof Array).to.equal(true);
        });

        it("should not manipulate the data", function (){
            const instance = new StringBuilder('cat');
            expect(instance._stringArray.join('')).to.equal('cat');
            const secondInstance = new StringBuilder();
            expect(secondInstance._stringArray.join('')).to.equal('');
        });


    });

    describe('Test append', function(){
        let instance = null;
        beforeEach(function(){
            instance = new StringBuilder('cat');
        });

        it('should NOT work when a non-string argument is passed', function(){
            expect(() => instance.append(-5)).to.throw();
            expect(() => instance.append({})).to.throw();
            expect(() => instance.append(undefined)).to.throw();
        });

        it('should work when a string argument is passed', function(){
            instance.append('dog');
            expect(instance._stringArray.join('')).to.equal('catdog');
        });

    });


    describe('Test prepend', function(){
        let instance = null;
        beforeEach(function(){
            instance = new StringBuilder('cat');
        });

        it('should NOT work when a non-string argument is passed', function(){
            expect(() => instance.prepend(-5)).to.throw();
            expect(() => instance.prepend({})).to.throw();
            expect(() => instance.prepend(undefined)).to.throw();
        });

        it('should work when a string argument is passed', function(){
            instance.prepend('dog');
            expect(instance._stringArray.join('')).to.equal('dogcat');
        });
    });


    describe('Test insertAt', function(){
        let instance = null;
        beforeEach(function(){
            instance = new StringBuilder('cat');
        });

        it('should NOT work when a non-string argument is passed', function(){
            expect(() => instance.insertAt(-5, 1)).to.throw();
            expect(() => instance.insertAt({}, 1)).to.throw();
            expect(() => instance.insertAt(undefined, 1)).to.throw();
        });

        it('should work when a string argument is passed', function(){
            instance.insertAt('dog', 1);
            expect(instance._stringArray.join('')).to.equal('cdogat');
        });
    });


    describe('Test remove', function(){
        let instance = null;
        beforeEach(function(){
            instance = new StringBuilder('cat');
        });
        
        it('should work correctly with correct arguments', function(){
            instance.remove(1, 1);
            expect(instance._stringArray.join('')).to.equal('ct');
        });

        it('should work correctly with larger length argument than the length of the string', function(){
            instance.remove(1, 8);
            expect(instance._stringArray.join('')).to.equal('c');
        });

        it('should work correctly with a negative number as length', function(){
            instance.remove(1, -8);
            expect(instance._stringArray.join('')).to.equal('cat');
        });

        it('should work correctly with a zero as length', function(){
            instance.remove(1, 0);
            expect(instance._stringArray.join('')).to.equal('cat');
        });
    });

    describe('Test toString', function(){     
        it('should produce the correct string', function(){
            instance = new StringBuilder('cat');
            expect(instance.toString()).to.equal('cat');
        });
        
    });

});