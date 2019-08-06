let buy = function (voucher, listOfItems) {
  for (let index = 0; index < listOfItems.length; index++) {
    let searching = voucher - listOfItems[index]
    let index_search = listOfItems.indexOf(searching, index + 1)
    if (index_search > 0)
      return [index, index_search]
  }
  return null
};

var exports = module.exports = {}
exports.test = function () {
  const assert = require('assert');
  /* it("should return Nothing on an empty list", function(){ */
  assert.deepStrictEqual(buy(5,[]), null)

  /* it("should return Nothing on a short list",function(){ */
  assert.deepStrictEqual(buy(5,[1]), null)

  /* it("should work for the examples", function(){  */
  assert.deepStrictEqual(buy(2,[1,1]), [0,1]);
  assert.deepStrictEqual(buy(3,[1,1]), null);
  assert.deepStrictEqual(buy(5,[5,2,3,4,5]), [1,2]);
  assert.deepStrictEqual(buy(5,[1,2,3,4,5]), [0,3]);
  assert.deepStrictEqual(buy(5,[0,0,0,2,3]), [3,4]);

}

exports.test()
