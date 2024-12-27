/**
 * LC 3110: Score of a String
 *
 * @param {string} s
 * @return {number}
 */
const scoreOfString = (s) => {
  let sum = 0;
  for (let index = 0; index < s.length - 1; index++) {
    sum += Math.abs(s[index].charCodeAt(0) - s[index + 1].charCodeAt(0));
  }
  return sum;
};

module.exports = scoreOfString;

