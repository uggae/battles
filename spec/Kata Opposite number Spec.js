describe("OppositeNumber", function() {
  var TestModule = require('../src/kata/Kata Opposite number.js');
  var testModule;

  beforeEach(function() {
    testModule = new TestModule();
  });

  it("should be able to do opposite of positive number", function() {
    expect(testModule.opposite(11)).toEqual(-11);
  });

  it("should be able to do opposite of 0... it's -0, right?", function() {
    expect(testModule.opposite(0)).toEqual(-0); // wut
  });

/*
it("This test fails", function() {
  expect(0).toEqual(-0);
});
*/

  it("should be able to do opposite of negative number", function() {
    expect(testModule.opposite(-223)).toEqual(223);
  });
})
