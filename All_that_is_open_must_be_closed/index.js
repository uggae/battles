function isBalanced(s, caps) {
  const pairs = [];
  for (let i = 0; i < caps.length; i += 2) {
    pairs.push([caps[i], caps[i + 1]]);
  }

  const stack = [];

  for (const char of s) {
    for (const [open, close] of pairs) {
      if (char !== open && char !== close) continue;
      if (open === close) {
        if (stack.length > 0 && stack[stack.length - 1] === open) {
          stack.pop();
        } else {
          stack.push(open);
        }
        break;
      }
      if (char === open) {
        stack.push(close);
        break;
      }
      if (char === close) {
        if (stack.length === 0 || stack.pop() !== close) return false;
        break;
      }
    }
  }
  return stack.length === 0;
}

module.exports = { isBalanced };