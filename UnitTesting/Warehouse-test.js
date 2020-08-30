const expect = require('chai').expect;
const Warehouse = require('./Warehouse');

describe('Instantiation and structure', function () {
    it('should throw if instantiated with a negative number or a 0', function () {
        expect(() => new Warehouse(-1)).to.throw();
        expect(() => new Warehouse(0)).to.throw();
        expect(() => new Warehouse('asd')).to.throw();
        expect(() => new Warehouse({})).to.throw();
        expect(() => new Warehouse()).to.throw();
    });

    it('should work if instantiated with a positive number', function () {
        expect(() => new Warehouse(1)).to.not.throw();
    });

    let instance = null;
    beforeEach(function () {
        instance = new Warehouse(1);
    });

    it('should have all functions and properties', function () {
        expect(instance).to.have.property('capacity');
        expect(instance).to.have.property('availableProducts');
        expect(Object.getPrototypeOf(instance).hasOwnProperty('addProduct')).to.equal(true);
        expect(Object.getPrototypeOf(instance).hasOwnProperty('orderProducts')).to.equal(true);
        expect(Object.getPrototypeOf(instance).hasOwnProperty('occupiedCapacity')).to.equal(true);
        expect(Object.getPrototypeOf(instance).hasOwnProperty('revision')).to.equal(true);
        expect(Object.getPrototypeOf(instance).hasOwnProperty('scrapeAProduct')).to.equal(true);
    });

    it('sets up the properties correctly', function () {
        expect(instance.capacity).to.equal(1);
        expect(Object.keys(instance.availableProducts).length).to.equal(2);
    });

    it('own properties have the correct type', function () {
        expect(typeof (instance.capacity)).to.equal('number');
        expect(instance.availableProducts instanceof Object).to.equal(true);
    });
});


describe('AddProduct', function () {
    let instance = null;
    let capacity = 3
    beforeEach(function () {
        instance = new Warehouse(capacity);
    });

    it('should add a product when there is capacity', function () {
        instance.addProduct('Food', 'apple', 1);
        expect(Object.keys(instance.availableProducts.Food)).to.contain('apple');
        expect(instance.availableProducts.Food.apple).to.equal(1);
    });

    it('should change quantity when a product is added multiple times', function () {
        instance.addProduct('Food', 'apple', 1);
        instance.addProduct('Food', 'apple', 1);
        expect(instance.availableProducts.Food.apple).to.equal(2);
    });

    it('should add multiple products when there is capacity', function () {
        instance.addProduct('Food', 'apple', 1);
        instance.addProduct('Food', 'banana', 2);
        expect(Object.keys(instance.availableProducts.Food)).to.contain('apple');
        expect(Object.keys(instance.availableProducts.Food)).to.contain('banana');
    });

    it('should throw when there is no capacity', function () {
        expect(() => instance.addProduct('Food', 'apple', 16)).to.throw();
    });

});


describe('Order Products', function () {
    let capacity = 10
    let instance = new Warehouse(capacity);

    it('order correctly', function () {
        instance.addProduct('Food', 'apple', 2);
        instance.addProduct('Food', 'banana', 3);
        instance.addProduct('Food', 'cucumber', 1);
        instance.orderProducts('Food');

        let arr = Object.keys(instance.availableProducts.Food);
        expect(arr.join(', ')).to.equal('banana, apple, cucumber');
    });


});

describe('Occupied Capacity', function () {
    it('should display the correct occupied Capacity', function(){
        let capacity = 3
        let instance = new Warehouse(capacity);
        instance.addProduct('Food', 'apple', 2);
        instance.addProduct('Food', 'cucumber', 1);
        expect(instance.occupiedCapacity()).to.equal(3);
    })
});


describe('Revision', function () {
    it('should print all products', function () {
        let capacity = 20
        let instance = new Warehouse(capacity);
        instance.addProduct('Food', 'apple', 2);
        instance.addProduct('Food', 'cucumber', 1);
        instance.addProduct('Drink', 'coke', 6);

        const output = instance.revision();

        expect(output).to.contain('Food');
        expect(output).to.contain('apple');
        expect(output).to.contain('cucumber');
        expect(output).to.contain('2');

        expect(output).to.contain('Drink');
        expect(output).to.contain('coke');
        expect(output).to.contain('6');
    });

    it('should print the correct output when empty', function () {
        let capacity = 3
        let instance = new Warehouse(capacity);

        const output = instance.revision();

        expect(output).to.equal('The warehouse is empty');
    });

});

describe('ScrapeAProduct', function () {
    let instance = null;
    let capacity = 10;
    beforeEach(function () {
        instance = new Warehouse(capacity);
        instance.addProduct('Food', "apple", 2);
        instance.addProduct('Food', "cucumber", 1);
        instance.addProduct('Drink', "coke", 6);
    });

    it('should decrease the number of existing product', function () {
        instance.scrapeAProduct('coke', 2);
        expect(instance.availableProducts.Drink['coke']).to.equal(4);
    });

    it('should set the number of existing product to 0 when qunatity to reduce is higher than the existing one', function () {
        instance.scrapeAProduct('coke', 22);
        expect(instance.availableProducts.Drink['coke']).to.equal(0);
    });

    it('should throw', function () {
        expect(() => instance.scrapeAProduct('dog', 2)).to.throw();
    });

});

