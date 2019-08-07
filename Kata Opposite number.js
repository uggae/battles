/*
const assert = require('assert');
var exports = module.exports={}

function opposite(number) {
  return -number
}

exports.test = function () {
  assert.equal(opposite(1) , -1);
  assert.equal(opposite(0) , 0);
  assert.equal(opposite(-50) , 50);
}
*/

function OppositeNumber() {
}
OppositeNumber.prototype.opposite = function (a) {
  return -a;
}
module.exports = OppositeNumber
