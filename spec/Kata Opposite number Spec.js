describe("OppositeNumber", function() {
  var OppositeNumber = require('../Kata Opposite number.js');
  var oppositeNumber;

  beforeEach(function() {
    oppositeNumber = new OppositeNumber();
  });

  it("should be able to do opposite of positive number", function() {
    expect(oppositeNumber.opposite(11)).toEqual(-11);
  });

  it("should be able to do opposite of 0... it's -0, right?", function() {
    expect(oppositeNumber.opposite(0)).toEqual(-0); // wut
  });

/*
it("This test fails", function() {
  expect(0).toEqual(-0);
});
*/

  it("should be able to do opposite of negative number", function() {
    expect(oppositeNumber.opposite(-223)).toEqual(223);
  });
})
/*
exports.test = function () {
  assert.equal(opposite(1) , -1);
  assert.equal(opposite(0) , 0);
  assert.equal(opposite(-50) , 50);
}
*/
