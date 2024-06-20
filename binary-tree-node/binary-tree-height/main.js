const tree = require('../binary-tree').tree1;

// Iterative Solution
const getIterativeHeightOfTree = function (root) {
    if (!root) {
        return -1;
    }

    const queue = [root];
    let height = -1;

    while (queue.length > 0) {

        let levelNodes = queue.length;

        while (levelNodes > 0) {
            const node = queue.shift();

            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right);
            }

            levelNodes--;
        }
        height++;
    }

    return height;
};

// Recursive Post Order Traversal
const getRecursiveHeightOfTree = function (root) {
    if (!root) {
        return -1;
    }

    return 1 + Math.max(getRecursiveHeightOfTree(root.left), getRecursiveHeightOfTree(root.right));
};

const iterativeHeight = getIterativeHeightOfTree(tree);
console.log(iterativeHeight);

const recursiveHeight = getRecursiveHeightOfTree(tree);
console.log(recursiveHeight);