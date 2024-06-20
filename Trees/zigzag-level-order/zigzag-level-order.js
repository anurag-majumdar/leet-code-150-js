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
        let n = queue.length;
        const levelNodes = [];
        while(n > 0) {
            const node = queue.shift();
            levelNodes.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            n--;
        }
        if (level % 2 === 0) {
            levelNodes.reverse();
        }
        result.push(levelNodes);
        level++;
    }
    return result;
};

// Approach 2
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
var zigzagLevelOrder2 = function (root) {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root];
    let level = 1;
    let rtl = false;
    while (queue.length > 0) {
        let n = queue.length;
        const levelNodes = [];
        while (n > 0) {
            if (rtl) {
                const node = queue.pop();
                levelNodes.push(node.val);
                if (node.right) {
                    queue.unshift(node.right);
                }
                if (node.left) {
                    queue.unshift(node.left);
                }
            } else {
                const node = queue.shift();
                levelNodes.push(node.val);
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }
            n--;
        }
        rtl = !rtl;
        result.push(levelNodes);
        level++;
    }
    return result;
};