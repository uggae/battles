
var myModules = [
  "sourcefile",
  "Beginner Series #3 Sum of Numbers"
]

myModules.forEach(
   (exercise) => {
    var source = exercise + ".js"
    var tests = "./" + exercise + ".test.js"
    console.log("Testing " + tests  )
    require(tests);
  }
)

return -1
