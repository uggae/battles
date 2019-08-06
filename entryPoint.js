const fs = require('fs')
var exports = module.exports={}

exports.exercises = [
  "sourcefile",
  "Beginner Series #3 Sum of Numbers",
  "Beginner Series #3 Sum of Numbers minimal",
  "Opposite number",
  "Stringy Strings",
  "Stringy Strings minimal1",
  "Stringy Strings minimal2"
]

function checkFileExistsSync(filepath){
  let flag = true;
  try{
    fs.accessSync(filepath, fs.F_OK);
  }catch(e){
    flag = false;
  }
  return flag;
}

exports.fileExists = checkFileExistsSync

//console.log(exports.fileExists("s"))
//console.log(exports.fileExists("./s"))
//console.log(exports.fileExists("./s1"))
