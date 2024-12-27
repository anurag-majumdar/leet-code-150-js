/**
 * LC 217: Contains Duplicate
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const frequencyMap = new Map();
  for (const num of nums) {
    if (frequencyMap.has(num)) {
      return true;
    }
    frequencyMap.set(num, 1);
  }
  return false;
};

module.exports = containsDuplicate; 
