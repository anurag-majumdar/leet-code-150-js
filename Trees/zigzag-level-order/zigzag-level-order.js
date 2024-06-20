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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) {
        return [];
    }

    const queue = [root];
    let level = 1;
    const result = [];
    while (queue.length > 0) {
        const n = queue.length;
        const levelNodes = [];
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            levelNodes.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        if (level % 2 === 0) {
            levelNodes.reverse();
        }
        result.push(levelNodes);
        level++;
    }
    return result;
};