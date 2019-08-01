function stringy(size) {
 let gimme01s = function (length) {
   console.log("Called with " + length)
   var out = "10"
   for (var i = 0; i < length/2; i++) {
     console.log("out is " + out)
     out = out.toString() + ("10")
     }
   console.log("Returning " + out.substr(0,length))
   return out.substr(0,length)
 }

return gimme01s(size);
}
