function TestModule() {
}
TestModule.prototype.stringy = size => Array.from(Array(size), (v, i) => +!(i % 2)).join('');
module.exports = TestModule
/*
const assert = require('assert');
var exports = module.exports={}

const stringy = size => Array.from(Array(size), (v, i) => +!(i % 2)).join('');

exports.test = function () {
  assert.equal(stringy(1) , "1");
  assert.equal(stringy(2).substr(0,1) , "1");
  assert.equal(stringy(6005).substr(0,1) , "1");

  assert.equal(stringy(6) , "101010");

  assert.equal(stringy(4) , "1010");

  assert.equal(stringy(12) , "101010101010");
}
*/
