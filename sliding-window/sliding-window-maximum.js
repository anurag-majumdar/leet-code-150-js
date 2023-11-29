// Old Solution

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindowOld = function (nums, k) {
  const n = nums.length;
  const maxElemSubSlidingWindow = [];
  if (n === 0 || k > n) {
    return maxElemSubSlidingWindow;
  }
  let maxElemSub = -Infinity;

  // Detect max element from first k elements.
  for (let i = 0; i < k; i++) {
    maxElemSub = Math.max(nums[i], maxElemSub);
  }
  maxElemSubSlidingWindow.push(maxElemSub);

  // Detect max element from successive k sized elements
  for (let i = 1; i < n - k + 1; i++) {
    maxElemSub = -Infinity;
    for (let j = i; j < i + k; j++) {
      maxElemSub = Math.max(nums[j], maxElemSub);
    }
    maxElemSubSlidingWindow.push(maxElemSub);
  }

  return maxElemSubSlidingWindow;
};

const findMax = (subList = []) => {
  let max = -Infinity;
  for (let num of subList) {
    max = Math.max(num, max);
  }
  return max;
};

/**
 * O(k * (n-k)) => O(n * k)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindowSubOptimal = (nums, k) => {
  const n = nums.length;
  const result = [];
  // O(n - k)
  for (let i = 0; i < n - k + 1; i++) {
    const subList = nums.slice(i, i + k); // O(k) time & space
    const currentMax = findMax(subList); // O(k) time
    result.push(currentMax);
  }
  return result;
};

const res = maxSlidingWindowSubOptimal([1, 3, -1, -3, 5, 3, 6, 7], 3);
console.log(res);

/**
 * O(n)
 *
 * Use monotonically decreasing queue.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindowOptimal = (nums, k) => {
  const n = nums.length;
  const result = [];
  const deque = [];

  for (let i = 0; i < n - k + 1; i++) {
    // if (deque.length && nums[i] < deque[0]) {
    //   deque.push[nums[i]];
    // } else {
    //   deque.push(nums[i]);
    // }
  }
};

const res2 = maxSlidingWindowOptimal([1, 3, -1, -3, 5, 3, 6, 7], 3);
console.log(res2);
