const assert = require('assert');
var exports = module.exports={}

function stringy(size) {
   var out = "10"
   for (var i = 0; i < size/2; i++)
     out = out.toString() + ("10")
   return out.substr(0,size)
}

exports.test = function () {
  //write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

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
}
