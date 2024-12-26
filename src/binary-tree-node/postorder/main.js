const tree = require('../binary-tree').tree1;

// L R N

// 1 2 3 4 5 6 7
// 4 5 2 6 7 3 1

// Recursive Traversal
const postOrderRecursive = (node) => {
  if (!node) {
    return;
  }

  postOrderRecursive(node.left);
  postOrderRecursive(node.right);

  visit(node);
};

const postOrderOneStack = (root) => {
  const stack = [];
  const current = root;

  while (current) {}
};

// Iterative Solution
const postOrderIterative = (root) => {
  const stack = [root];

  const stackOut = [];
  while (stack.length > 0) {
    const node = stack.pop();
    stackOut.push(node);

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  while (stackOut.length > 0) {
    visit(stackOut.pop());
  }
};

const morrisPostOrder = (root) => {
  let current = root;

  while (current) {
    if (!current.right) {
      visit(current);
      current = current.left;
    } else {
      let predecessor = current.right;
      while (predecessor.left && predecessor.left !== current) {
        predecessor = predecessor.left;
      }

      if (predecessor.left) {
        predecessor.left = null;
        current = current.left;
      } else {
        predecessor.left = current;
        visit(current);
        current = current.right;
      }
    }
  }
};

const visit = (node) => {
  // console.log(node.value);
  result.push(node.value);
};

console.log('Recursive: ');
let result = [];
postOrderRecursive(tree);
console.log(result);

console.log('Iterative with space O(n): ');
result = [];
postOrderIterative(tree);
console.log(result);

console.log('Iterative with space O(1): ');
result = [];
morrisPostOrder(tree);
console.log(result.reverse());
