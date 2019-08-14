describe("A Gift Well Spent", function() {
    var TestModule = require('../src/kata/Kata A Gift Well Spent.js');
    var testModule;

    beforeEach(function() {
        testModule = new TestModule();
    });

    it("should return Nothing on an empty list", function() {
        //assert.deepStrictEqual(buy(5, []), null)
        expect(testModule.buy(5, [])).toEqual(null);
    })

    it("should return Nothing on a short list",function() {
        //assert.deepStrictEqual(buy(5, [1]), null)
        expect(testModule.buy(5, [1])).toEqual(null);
    })

    it("should work for the examples", function() {
            //assert.deepStrictEqual(testModule.buy(2, [1, 1]), [0, 1]);
            expect(testModule.buy(2, [1, 1])).toEqual([0,1]);

            //assert.deepStrictEqual(testModule.buy(3, [1, 1]), null);
            expect(testModule.buy(3, [1, 1])).toEqual(null);

            //assert.deepStrictEqual(testModule.buy(5, [5, 2, 3, 4, 5]), [1, 2]);
            expect(testModule.buy(5, [5, 2, 3, 4, 5])).toEqual([1, 2]);

            //assert.deepStrictEqual(testModule.buy(5, [1, 2, 3, 4, 5]), [0, 3]);
            expect(testModule.buy(5, [1, 2, 3, 4, 5])).toEqual([0, 3]);

            //assert.deepStrictEqual(testModule.buy(5, [0, 0, 0, 2, 3]), [3, 4]);
            expect(testModule.buy(5, [0, 0, 0, 2, 3])).toEqual([3, 4]);
    })
})
