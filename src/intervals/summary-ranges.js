/**
 * O(n) time | O(n) space
 *
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = (nums) => {
  const ranges = [];
  let startIndex = 0,
    currentIndex = 0,
    n = nums.length,
    expectedNum = nums[0];

  while (currentIndex < n) {
    if (expectedNum + 1 === nums[currentIndex + 1]) {
      currentIndex++;
      expectedNum++;
    } else {
      ranges.push(encodeRange([nums[startIndex], nums[currentIndex]]));
      expectedNum = nums[currentIndex + 1];
      currentIndex++;
      startIndex = currentIndex;
    }
  }
  return ranges;
};

const encodeRange = ([startVal, endVal]) => {
  if (startVal !== endVal) {
    return `${startVal}->${endVal}`;
  } else {
    return `${startVal}`;
  }
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
