const assert = require('assert');
var myModule = require("./Kata Beginner Series #3 Sum of Numbers.js")

assert.equal(myModule.GetSum(1,2) , 3);
assert( myModule.GetSum(0,0) == 0, "Should be true")
assert.deepEqual(myModule.GetSum(10,200) , 20055);
assert.deepEqual(myModule.GetSum(0,-1) , -1);
