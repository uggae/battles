function isBalanced(s, caps) {
  let stack = [];
  let openingCharacters = caps
    .split("")
    .filter((char, index) => index % 2 === 0);
  let closingCharacters = caps
    .split("")
    .filter((char, index) => index % 2 === 1);

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (closingCharacters.includes(char)) {
      if (stack.length > 0 && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        if (openingCharacters.includes(char)) {
          stack.push(char);
        } else return false;
      }
    } else if (openingCharacters.includes(char)) {
      const idx = openingCharacters.indexOf(char);
      stack.push(closingCharacters[idx]);
    }
  }
  return stack.length === 0;
}

module.exports = { isBalanced };
