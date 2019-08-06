const entryPoint = require ("./entryPoint.js")

var verbose = true
if ( (process.argv.includes("--quiet")) || (process.argv.includes("-q")) ) {
  verbose = false
}

var log = (output) => {
  if (verbose) {
    console.log(output)
  }
}

entryPoint.exercises.forEach(
   (exercise) => {
    var sourceFile = "./" + exercise + ".js"
    var testFile = "./" + exercise + ".test.js"
    log("Testing  " + sourceFile )
    var source = require(sourceFile)
    //TODO: Only testing if .test() exists, but not whether it is a function
    if ( source.test != undefined ) {
      source.test()
      log("    DONE")
    } else if (entryPoint.fileExists(testFile)) {
        log("Testfile " + testFile  )
        require(testFile)
        log("    DONE")
        } else {
          log("  Exercise " + sourceFile + " does not seem to export a .test() method" )
          log("  Exercise " + sourceFile + " does not have .test.js file" )
        }
  }
)

return 1
