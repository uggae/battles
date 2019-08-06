var exports = module.exports={}
exports.mySum = function (a,b) {
  return a+b;
}
exports.test = function () {
  console.log(exports.mySum(1,2));
  console.log(exports.mySum(0,0));
  console.log(exports.mySum(10,200));
}

const assert = require('assert');

assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
assert(true, "Should be true")
// Generate an AssertionError to compare the error message later:
