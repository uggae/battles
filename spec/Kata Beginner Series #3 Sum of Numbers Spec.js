describe("Sourcefile", function() {
  var TestModule = require('../src/kata/Kata Beginner Series #3 Sum of Numbers.js');
  var testModule;

  beforeEach(function() {
    testModule = new TestModule();
  });

  it("should be able to add 1+2", function() {
    expect(testModule.GetSum(1,2)).toEqual(3);
  });

  it("should be able to add 0+0", function() {
    expect(testModule.GetSum(0,0)).toEqual(0);
  });

  it("should be able to add 10+200", function() {
    expect(testModule.GetSum(10,200)).toEqual(20055);
  });

  it("should be able to add -1+0", function() {
    expect(testModule.GetSum(-1,0)).toEqual(-1);
  });
})

/*
  assert.equal(GetSum(1,2) , 3);
  assert( GetSum(0,0) == 0, "Should be true")
  assert.deepEqual(GetSum(10,200) , 20055);
  assert.deepEqual(GetSum(0,-1) , -1);
*/
