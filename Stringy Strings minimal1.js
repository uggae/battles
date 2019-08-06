const assert = require('assert');
var exports = module.exports={}

const stringy = size => "10".repeat(size).slice(0,size);

exports.test = function () {
  assert.equal(stringy(1) , "1");
  assert.equal(stringy(2).substr(0,1) , "1");
  assert.equal(stringy(6005).substr(0,1) , "1");

  assert.equal(stringy(6) , "101010");

  assert.equal(stringy(4) , "1010");

  assert.equal(stringy(12) , "101010101010");
}
