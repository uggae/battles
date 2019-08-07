/*
var exports = module.exports={}

exports.mySum = function (a,b) {
  return a+b;
}

exports.test = function () {
  const assert = require('assert');

  assert.equal(mySum(1,2) , 3);
  assert( mySum(0,0) == 0, "Should be true")
  assert.deepEqual(mySum(10,200) , 210);
}
*/
function Sourcefile() {
}
Sourcefile.prototype.mySum = function (a,b) {
  return a+b;
}
module.exports = Sourcefile
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
function Player() {
}
Player.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};

Player.prototype.pause = function() {
  this.isPlaying = false;
};

Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};

module.exports = Player;
*/
