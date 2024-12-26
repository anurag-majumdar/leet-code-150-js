/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const frequencyMap = new Map();
  for (const num of nums) {
    if (frequencyMap.has(num)) {
      return true;
    } else {
      frequencyMap.set(num, 1);
    }
  }
  return false;
};
