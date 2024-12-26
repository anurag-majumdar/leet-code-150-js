const sumTree = require('./tree').sumTree;

const checkSumRecursive = (root) => {
    if (!root) return 0;
    if (!root.left && !root.right) return root.value;

    if (root.value === checkSumRecursive(root.left) + checkSumRecursive(root.right)) {
        return 2 * root.value;
    }

    return Number.MIN_VALUE;
};

const output = checkSumRecursive(sumTree);
console.log(output === Number.MIN_VALUE ? false : true);
