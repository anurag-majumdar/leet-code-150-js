/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
    nums.sort((n1, n2) => n1 - n2);
    const result = [];
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let left = j + 1, right = nums.length - 1;
            while (left < right) {
                let currentSum = nums[i] + nums[left] + nums[right] + nums[j];
                if (currentSum === target) {
                    result.push([nums[i], nums[left], nums[right], nums[j]]);
                    left++;
                    right--;
                } else if (currentSum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return [...new Set(result.map(JSON.stringify))].map(JSON.parse);
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));