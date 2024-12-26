/**
 * Ideal solution.
 * O(n) time complexity, 2 pointer approach.
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElementIdeal = (nums, val) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] === val && nums[right] !== val) {
      swap(nums, left, right);
      left++;
      right--;
    }
    if (nums[left] !== val) {
      left++;
    }
    if (nums[right] === val) {
      right--;
    }
  }
  if (left === right && nums[left] === val) {
    return left;
  }
  return right + 1;
};

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

/**
 * O(n) time complexity.
 * O(n) space complexity.
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElementSubOptimal = (nums, val) => {
  const temp = nums.filter((num) => num !== val);
  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }
  return temp.length;
};
