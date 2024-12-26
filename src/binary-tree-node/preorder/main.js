const tree = require('../binary-tree').tree1;

// N L R

// 1 2 3 4 5 6 7
// 1 2 4 5 3 6 7

// Recursive Traversal
const preOrderRecursive = (node) => {
  if (!node) {
    return;
  }

  visit(node);

  preOrderRecursive(node.left);
  preOrderRecursive(node.right);
};

// Iterative Solution
const preOrderIterative = (root) => {
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    visit(node);

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }
};

const morrisPreOrder = (root) => {
  let current = root;

  while (current) {
    if (!current.left) {
      visit(current);
      current = current.right;
    } else {
      let predecessor = current.left;
      while (predecessor.right && predecessor.right !== current) {
        predecessor = predecessor.right;
      }

      if (predecessor.right) {
        predecessor.right = null;
        current = current.right;
      } else {
        predecessor.right = current;
        visit(current);
        current = current.left;
      }
    }
  }
};

const visit = (node) => {
  result.push(node.value);
};

console.log('Recursive: ');
let result = [];
preOrderRecursive(tree);
console.log(result);

console.log('Iterative with space O(n): ');
result = [];
preOrderIterative(tree);
console.log(result);

console.log('Iterative with space O(1): ');
result = [];
morrisPreOrder(tree);
console.log(result);
