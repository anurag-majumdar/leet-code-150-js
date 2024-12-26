/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let left = 0,
    right = nums.length - 1;
  let targetIndex = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target > nums[mid]) {
      left = mid + 1;
      targetIndex = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
      targetIndex = mid;
    } else if (target == nums[mid]) {
      return mid;
    }
  }
  return targetIndex;
};

console.log(searchInsert([1, 3, 5, 6], 0));

// [1, 3, 5, 6], 10
