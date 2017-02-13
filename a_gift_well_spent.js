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
