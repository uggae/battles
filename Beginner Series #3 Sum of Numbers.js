function GetSum( a,b )
{
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
  var sumSorted = function (start,end) {
    var sum = 0
    //for (var i = start; i<=end; i++) sum += i
    var i = start
    while (i <= end) sum += i++
    return sum
  }

  return (a<b) ? sumSorted(a,b) : sumSorted(b,a)

}
