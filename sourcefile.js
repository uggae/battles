var exports = module.exports={}

mySum = function (a,b) {
  return a+b;
}

exports.test = function () {
  const assert = require('assert');
  
  assert.equal(mySum(1,2) , 3);
  assert( mySum(0,0) == 0, "Should be true")
  assert.deepEqual(mySum(10,200) , 210);
}