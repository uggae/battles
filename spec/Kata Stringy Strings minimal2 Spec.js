describe("Stringy Strings minimal2", function() {
  var TestModule = require('../src/kata/Kata Stringy Strings minimal2.js');
  var testModule;

  beforeEach(function() {
    testModule = new TestModule();
  });

  it("output should start with a 1", function() {
    expect(testModule.stringy(1)).toEqual("1");
    expect(testModule.stringy(Math.ceil(Math.random()*1000)).substr(0,1)).toEqual("1");
  });

  it("should generate string 6 chars long :'101010'.", function() {
    expect(testModule.stringy(6)).toEqual("101010");
  });

  it("should generate string 7 chars long :'1010101'.", function() {
    expect(testModule.stringy(7)).toEqual("1010101");
  });

  it("should generate string 7 chars long :'1010101'.", function() {
    expect(testModule.stringy(77)).toEqual("10101010101010101010101010101010101010101010101010101010101010101010101010101");
  });

})
/*
//the string should start with a 1.
assert.equal(stringy(1) , "1");
assert.equal(stringy(2).substr(0,1) , "1");
assert.equal(stringy(6005).substr(0,1) , "1");

//a string with size 6 should return :'101010'.
assert.equal(stringy(6) , "101010");

//with size 4 should return : '1010'.
assert.equal(stringy(4) , "1010");

//with size 12 should return : '101010101010'.
assert.equal(stringy(12) , "101010101010");
*/
