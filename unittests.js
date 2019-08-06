
var myModules = [
  "sourcefile",
  "Beginner Series #3 Sum of Numbers"
]

//array.forEach(function(currentValue, index, arr), thisValue)
myModules.forEach(testIt)

function testIt(exercise) {
  var source = exercise + ".js"
  var tests = exercise + ".test.js"
  console.log("Testing " + tests  )
}
