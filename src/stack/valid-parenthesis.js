/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  if (s[0] === ')' || s[0] === ']' || s[0] === '}') return false;

  const stack = [];
  const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of s) {
    if (bracketMap[char]) {
      if (stack.length > 0 && stack[0] === bracketMap[char]) {
        stack.shift();
      } else {
        return false;
      }
    } else {
      stack.unshift(char);
    }
  }

  if (stack.length === 0) return true;
  else return false;
};
