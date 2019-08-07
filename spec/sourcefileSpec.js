/*
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(false);
  });
});
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
exports.test = function () {
  const assert = require('assert');

  assert.equal(mySum(1,2) , 3);
  assert( mySum(0,0) == 0, "Should be true")
  assert.deepEqual(mySum(10,200) , 210);
}
*/
describe("Sourcefile", function() {
  var Sourcefile = require('../sourcefile.js');
  var sourcefile;

  beforeEach(function() {
    sourcefile = new Sourcefile();
  });

  it("should be able to add 1+2", function() {
    expect(sourcefile.mySum(1,2)).toEqual(3);
  });

  it("should be able to add 0+0", function() {
    expect(sourcefile.mySum(0,0)).toEqual(0);
  });
  it("should be able to add 10+200", function() {
    expect(sourcefile.mySum(10,200)).toEqual(210);
  });
})
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
describe("Player", function() {
  var Player = require('../../lib/jasmine_examples/Player');
  var Song = require('../../lib/jasmine_examples/Song');
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });


  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
});
*/
