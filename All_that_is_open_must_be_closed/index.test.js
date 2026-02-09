const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(isBalanced("(Sensei says yes!)", "()"), true);
    assert.strictEqual(isBalanced("(Sensei says no!", "()"), false);

    assert.strictEqual(isBalanced("(Sensei [says] yes!)", "()[]"), true);
    assert.strictEqual(isBalanced("(Sensei [says) no!]", "()[]"), false);

    assert.strictEqual(isBalanced("Sensei says -yes-!", "--"), true);
    assert.strictEqual(isBalanced("Sensei -says no!", "--"), false);
  });
});
