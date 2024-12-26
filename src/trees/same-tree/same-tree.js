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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  // p & q is empty, both trees are same.
  if (!p && !q) return true;
  // If either p/q is null, trees aren't equal.
  if (!p || !q) return false;
  if (p.val != q.val) return false;

  // If p & q both exist & their values are not equal.
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/**
 * Iterative solution.
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTreeIterative = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val != q.val) return false;

  const queueP = [p];
  const queueQ = [q];
  while (queueP.length > 0 && queueQ.length > 0) {
    const visitedP = queueP.shift();
    const visitedQ = queueQ.shift();

    if (!visitedP && !visitedQ) continue;
    if (!visitedP || !visitedQ) return false;
    if (visitedP.val != visitedQ.val) return false;

    // If both nodes exist & their values are equal.
    queueP.push(visitedP.left);
    queueP.push(visitedP.right);

    queueQ.push(visitedQ.left);
    queueQ.push(visitedQ.right);
  }
  return true;
};
