function GetSum( a,b )
{
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
  var sumSorted = function (start,end) {
    var sum = 0
    for (var i = start; i<=end; i++) {
      sum += i
    }
    return sum
  }
  if (a<b) {
    return sumSorted(a,b)
    }
    else if (a>b) {
      return sumSorted(b,a)
      }
      else
      return a
}
