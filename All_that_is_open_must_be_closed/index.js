function isBalanced(s, caps) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      const openingCharacterIdx = caps.indexOf(s[i]);
      const closingCharacter =
        openingCharacterIdx === -1 ? undefined : caps[openingCharacterIdx + 1];
      if (closingCharacter !== undefined) {
        stack.push(closingCharacter);
      }
    }
  }
  return stack.length === 0;
}

module.exports = { isBalanced };
