var buy = function(x, arr) {
  //generate pair values
  console.log("Received +",x,arr);
  var pairs=[];
  //minimal difference found so far
  var diff = {
      val: x+1,
      a: -1,
      b: -1
  };
  console.log("-- diff=",diff.val,"(",diff.a,"),(",diff.b,")");

  for (var i = 0 ; i < arr.length; i++ ) {
      for (var j = 0 ; j < arr.length; j++ ) {
           if (i>=j) {
               pairs[i][j]=x+1;
               console.log("[",i,"],[",j,"] = ",pairs[i][j]);
              } else {
                pairs[i][j] = arr[i] + arr[j];
                console.log("[",i,"],[",j,"] = ",pairs[i][j]);
                if (x-pairs[i][j] < diff.val) {
                    diff.val = x-pairs[i][j];
                    diff.a = i;
                    diff.b = j;
                    console.log("-- diff=",diff.val,"(",val.a,"),(",val.b,")");
                };
                //console.log("[",i,"],[",j,"] = ",pairs[i][j]," diff=",diff.val,"(",val.a,"),(",val.b,")");
              }
      }
  };


  // sort

  //evaluate
  return null;
};

var exports = module.exports={}
exports.test = function () {
  const assert = require('assert');
  // TODO: Tests are commmented as code is not working
  /*
  assert.deepEqual(buy(2,[1,1]), [0,1])
  assert.deepEqual(buy(3,[1,1]), null)
  assert.deepEqual(buy(5,[5,2,3,4,5]), [1,2])
  */
}
