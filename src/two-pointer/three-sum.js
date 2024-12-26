const threeSum = function (nums) {
    nums.sort((n1, n2) => n1 - n2);
    const result = [];
    let index = 0;
    while (index < nums.length - 2) {
        let currentNum = nums[index], left = index + 1, right = nums.length - 1;
        while (left < right) {
            let currentSum = currentNum + nums[left] + nums[right];
            if (currentSum === 0) {
                result.push([currentNum, nums[left], nums[right]]);
                left++;
                right--;
            } else if (currentSum < 0) {
                left++;
            } else {
                right--;
            }
        }
        index++;
    }
    return [...new Set(result.map(JSON.stringify))].map(JSON.parse);
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));