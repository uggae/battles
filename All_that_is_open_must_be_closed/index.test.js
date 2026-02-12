const { assert } = require("chai");
const { isBalanced } = require("./index");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(isBalanced("(Sensei says yes!)", "()"), true);
    assert.strictEqual(isBalanced("(Sensei says no!", "()"), false);

    assert.strictEqual(isBalanced("(Sensei [says] yes!)", "()[]"), true);
    assert.strictEqual(isBalanced("(Sensei [says) no!]", "()[]"), false);

    assert.strictEqual(isBalanced("Sensei says -yes-!", "--"), true);
    assert.strictEqual(isBalanced("Sensei -says no!", "--"), false);
  });
  it("my", () => {
    assert.strictEqual(isBalanced("(Sensei says yes!))", "()"), false);
    assert.strictEqual(isBalanced("Sensei says no!)", "()"), false);

    assert.strictEqual(isBalanced("(Sensei [says] yes!)", "()[]"), true);
    assert.strictEqual(isBalanced("(Sensei [says) no!]", "()[]"), false);

    assert.strictEqual(isBalanced("Sensei says -yes-!", "--"), true);
    assert.strictEqual(isBalanced("Sensei -says no!", "--"), false);
  });
});
