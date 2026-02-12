function isBalanced(s, caps) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (isLastInStack(stack, s[i])) {
      stack.pop();
    } else if (isOpeningCharacter(s[i], caps)) {
      stack.push(getClosingCharacter(s[i], caps));
    }
  }
  return stack.length === 0;
}

function isLastInStack(stack, char) {
  return stack.length > 0 && stack[stack.length - 1] === char;
}

function isOpeningCharacter(char, caps) {
  const openingCharacters = caps
    .split("")
    .filter((char, index) => index % 2 === 0);
  return openingCharacters.includes(char);
}

function getClosingCharacter(openingCharacter, caps) {
  const openingCharacterIdx = caps.indexOf(openingCharacter);
  if (openingCharacterIdx === -1) {
    throw new Error(`Opening character ${openingCharacter} not found in caps`);
  }
  return caps[openingCharacterIdx + 1];
}
module.exports = { isBalanced };
