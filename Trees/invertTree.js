/**
 * Definition for a binary tree node.
 * 
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Recursive Solution.
 * 
 * @param {TreeNode} root
 * @returns {TreeNode}
 */
const invertTree = (root) => {
    if (!root) return null;
    Utility.swapNodes(root);
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

/**
 * Iterative Solution.
 * 
 * @param {TreeNode} root
 * @returns {TreeNode}
 */
const invertTreeIterative = (root) => {
    if (!root) return null;
    const queue = [root];
    while (queue.length > 0) {
        const visitedNode = queue.shift();
        if (!visitedNode) continue;
        Utility.swapNodes(visitedNode);
        if (visitedNode.left) queue.push(visitedNode.left);
        if (visitedNode.right) queue.push(visitedNode.right);
    }
    return root;
};

/**
 * Define Utility to encapsulate private functions.
 * 
 * @returns {Object}
 */
const Utility = (() => {
    const swapNodes = (root) => {
        const temp = root.left;
        root.left = root.right;
        root.right = temp;
    }

    return {
        swapNodes
    };
})();