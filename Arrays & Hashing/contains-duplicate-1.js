/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    const frequencyMap = new Map();
    const numsLength = nums.length;
    for (let index = 0; index < numsLength; index++) {
        if (frequencyMap.has(nums[index])) {
            return true;
        } else {
            frequencyMap.set(nums[index], 1);
        }
    }
    return false;
};
