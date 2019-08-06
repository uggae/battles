var exports = module.exports={}
exports.mySum = function (a,b) {
  return a+b;
}
exports.test = function () {
  assert.equal(exports.mySum(1,2) , 3);
  assert( exports.mySum(0,0) == 0, "Should be true")
  assert.deepEqual(exports.mySum(10,200) , 210);
}

const assert = require('assert');
