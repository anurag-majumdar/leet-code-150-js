/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Recursive solution.
 *
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

/**
 * Iterative solution.
 *
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepthIterative = (root) => {
  if (!root) return 0;
  let depth = 0;
  const queue = [root];
  while (queue.length > 0) {
    const totalNodesAtCurrentLevel = queue.length;
    for (let i = 0; i < totalNodesAtCurrentLevel; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }
  return depth;
};
