var buy = function(voucher, listOfItems) {
  //walk the array
  for (var index = 0; index < listOfItems.length; index++) {
    // for each check if c-arr[i] exists
    let item = listOfItems[index]
    let searching = voucher - item
    console.log("Processing item <" + item + ">. Searching for <" + searching + ">")
    let index_search = listOfItems.indexOf(searching, index+1)
    console.log("Index is <" + index_search + "> in this array <" + listOfItems + ">")
    //if (listOfItems.includes(searching)) {
    if (index_search > 0) {
      // if yes. prefer the minimum
      console.log("Looks like we got it!: " + [index,index_search])
      return [index,index_search]
    }
  }
  // if no, return null
  return null

};

var exports = module.exports={}
exports.test = function () {
  const assert = require('assert');
  // TODO: Finalize tests
  assert.deepStrictEqual( buy(2,[1,1]) , [0,1])
  assert.deepStrictEqual(buy(3,[1,1]), null)
  assert.deepEqual(buy(5,[5,2,3,4,5]), [1,2])

  //The indices start at 0.
  //The first index should always be smaller than the second index.
  //If there are multiple solutions, return the minimum (lexicographically):

  //should return Nothing on an empty list
  //should return Nothing on a short list
  // should work for the examples
  // should return the correct indices if there are any
  /*
  describe("buy", function(){
  var randomInt = function(){
    return Math.round(Math.random() * 100);
  }
  var randomArray = function(n){
    var i, r = [];
    for(i = 0; i < n; ++i) r.push(randomInt());
    return r;
  }
  it("should return Nothing on an empty list", function(){
    Test.assertEquals(buy(randomInt(), []), null);
  });
  it("should return Nothing on a short list",function(){
    Test.assertEquals(buy(randomInt(), [randomInt()]), null);
  });
  it("should work for the examples", function(){
    Test.assertSimilar(buy(2,[1,1]), [0,1]);
    Test.assertSimilar(buy(3,[1,1]), null);
    Test.assertSimilar(buy(5,[5,2,3,4,5]), [1,2]);
    Test.assertSimilar(buy(5,[1,2,3,4,5]), [0,3]);
    Test.assertSimilar(buy(5,[0,0,0,2,3]), [3,4]);
  });
  it("should return the correct indices if there are any", function(){
    var arr, x, r, i;
    for(i = 0; i < 20; ++i){
      arr = randomArray(randomInt()), x = randomInt(), r = buy(x,arr.concat([]));
      if(r !== null)
        Test.assertEquals(x, arr[r[0]] + arr[r[1]]);
    }
  });
});
  */
}

exports.test()
