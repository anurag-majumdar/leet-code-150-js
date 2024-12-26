const tree = require('../binary-tree').tree1;

// L N R

// 1 2 3 4 5 6 7
// 4 2 5 1 6 3 7

// Recursive Traversal
const inOrderRecursive = function (node) {
    if (!node) {
        return;
    }

    inOrderRecursive(node.left);

    visit(node);

    inOrderRecursive(node.right);
};

// Iterative Solution
const inOrderIterative = function (root) {
    if (!root) {
        return;
    }
    const stack = [];
    let node = root;

    while (stack.length > 0 || node) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop();
            visit(node);
            node = node.right;
        }
    }
};

const morrisInOrder = function (root) {
    let current = root;
    while (current) {
        if (!current.left) {
            visit(current);
            current = current.right;
        } else {
            // Find predecessor
            let predecessor = current.left;
            while (predecessor.right && predecessor.right !== current) {
                predecessor = predecessor.right;
            }

            // If right node is null go left after establishing link from predecessor to current
            if (predecessor.right) {
                predecessor.right = null;
                visit(current);
                current = current.right;
            } else if (!predecessor.right) {
                predecessor.right = current;
                current = current.left;
            }
        }
    }
};

const visit = function (node) {
    // console.log(node.value);
    result.push(node.value);
};

console.log('Recursive: ');
let result = [];
inOrderRecursive(tree);
console.log(result);

console.log('Iterative with space O(n): ');
result = [];
inOrderIterative(tree);
console.log(result);

console.log('Iterative with space O(1): ');
result = [];
morrisInOrder(tree);
console.log(result);