/**
 * O(n) time complexity.
 * 
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        let currentSum = numbers[left] + numbers[right];
        if (currentSum === target) {
            return [left + 1, right + 1];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
};