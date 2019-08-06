var exports = module.exports={}

exports.exercises = [
  "sourcefile",
  "Beginner Series #3 Sum of Numbers"
]

exports.fileExists = function (path) {
  const fs = require('fs')
  fs.access(path, fs.F_OK, (err) => {
    if (err) {
      console.error(err)
      return false
    }
  })
  return true
}
