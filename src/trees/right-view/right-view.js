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
var rightSideView = (root) => {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    let levelNodesLength = queue.length;
    while (levelNodesLength > 0) {
      const node = queue.shift();
      if (levelNodesLength === 1) {
        result.push(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      levelNodesLength--;
    }
  }
  return result;
};
