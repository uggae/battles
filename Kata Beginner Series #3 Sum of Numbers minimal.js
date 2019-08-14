function TestModule() {
}
TestModule.prototype.GetSum = function (a,b) {
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}
module.exports = TestModule
/*
var exports = module.exports={}

function GetSum( a,b )
{
return (Math.abs(a - b) + 1) * (a+b) / 2;
}

exports.test = () => {
  const assert = require('assert');

  assert.equal(GetSum(1,2) , 3);
  assert( GetSum(0,0) == 0, "Should be true")
  assert.deepEqual(GetSum(10,200) , 20055);
  assert.deepEqual(GetSum(0,-1) , -1);
}
*/
