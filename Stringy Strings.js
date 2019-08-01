function stringy(size) {
   var out = "10"
   for (var i = 0; i < size/2; i++)
     out = out.toString() + ("10")
   return out.substr(0,size)
}
