const fs = require('fs')
var exports = module.exports={}

exports.exercises = [
  "sourcefile",
  "Kata Beginner Series #3 Sum of Numbers",
  "Kata Beginner Series #3 Sum of Numbers minimal",
  "Kata Opposite number",
  "Kata Stringy Strings",
  "Kata Stringy Strings minimal1",
  "Kata Stringy Strings minimal2",
  "Kata A Gift Well Spent"
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
