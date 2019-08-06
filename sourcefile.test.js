/*
 * DEPRECATED
 *
 */
/*
exports.mySum = function (a,b) {
  return a+b;
};
*/

var myMod = require("./sourcefile.js")

console.log(myMod.mySum(1,2));
console.log(myMod.mySum(0,0));
console.log(myMod.mySum(10,200));

/*
describe('myDescription', () => {
  it('mySynchronousDescription', () => {
    expect(mySum(1,2)).toBe(3)
  });
});
*/
