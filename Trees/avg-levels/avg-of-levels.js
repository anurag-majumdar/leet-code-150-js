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
 * @return {number[]}
 */
const averageOfLevels = function (root) {
    if (!root) {
        return [];
    }

    const queue = [root];
    const result = [];
    while (queue.length > 0) {
        let n = queue.length;
        let sum = 0;
        for (let i = n; i > 0; i--) {
            const node = queue.shift();
            sum += node.val;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.push(sum / n);
    }
    return result;
};