/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};

console.log(findMin([3, 4, 5, 1, 2]));
