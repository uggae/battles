describe("Example", function() {
  var TestModule = require('../src/kata/Example.js');
  var testModule;

  beforeEach(function() {
    testModule = new TestModule();
  });

  it("should be able to add 1+2", function() {
    expect(testModule.mySum(1,2)).toEqual(3);
  });

  it("should be able to add 0+0", function() {
    expect(testModule.mySum(0,0)).toEqual(0);
  });

  it("should be able to add 10+200", function() {
    expect(testModule.mySum(10,200)).toEqual(210);
  });

})
