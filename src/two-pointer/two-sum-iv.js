/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    const nums = inorderTraversal(root, []);
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let currentSum = nums[left] + nums[right];
        if (currentSum === k) {
            return true;
        } else if (currentSum < k) {
            left++;
        } else {
            right--;
        }
    }
    return false;
};

function inorderTraversal(root, nums) {
    if (root) {
        inorderTraversal(root.left, nums);
        nums.push(root.val);
        inorderTraversal(root.right, nums);
    }
    return nums;
}