/*
exports.test = function () {
  const assert = require('assert');

  assert.equal(mySum(1,2) , 3);
  assert( mySum(0,0) == 0, "Should be true")
  assert.deepEqual(mySum(10,200) , 210);
}
*/
describe("Sourcefile", function() {
  var Sourcefile = require('../sourcefile.js');
  var sourcefile;

  beforeEach(function() {
    sourcefile = new Sourcefile();
  });

  it("should be able to add 1+2", function() {
    expect(sourcefile.mySum(1,2)).toEqual(3);
  });

  it("should be able to add 0+0", function() {
    expect(sourcefile.mySum(0,0)).toEqual(0);
  });
  it("should be able to add 10+200", function() {
    expect(sourcefile.mySum(10,200)).toEqual(210);
  });
})
