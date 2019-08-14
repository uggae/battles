function TestModule() {
}
TestModule.prototype.GetSum = function (a,b) {
  var sumSorted = function (start,end) {
    var sum = 0
    for (var i = start; i<=end; i++) sum += i
    return sum
  }
  return (a<b) ? sumSorted(a,b) : sumSorted(b,a)
}
module.exports = TestModule
/*
var exports = module.exports={}
exports.GetSum = GetSum

function GetSum( a,b )
{
  var sumSorted = function (start,end) {
    var sum = 0
    for (var i = start; i<=end; i++) sum += i
    return sum
  }

  return (a<b) ? sumSorted(a,b) : sumSorted(b,a)
}
*/
