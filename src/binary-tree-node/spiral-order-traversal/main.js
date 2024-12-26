const tree = require('../binary-tree').tree1;

// Iterative Solution
const spiralOrderIterative = (root) => {
  const queue = [root];
  let flag = false;

  while (queue.length > 0) {
    let levelNodes = queue.length;

    while (levelNodes > 0) {
      if (flag) {
        const node = queue.shift();
        console.log(node.value);

        if (node.left) {
          queue.push(node.left);
        }

        if (node.right) {
          queue.push(node.right);
        }
      } else {
        const node = queue.pop();
        console.log(node.value);

        if (node.right) {
          queue.unshift(node.right);
        }

        if (node.left) {
          queue.unshift(node.left);
        }
      }
      levelNodes--;
    }
    flag = !flag;
  }
};

// Recursive Traversal
const spiralOrderRecursive = (root, iter) => {
  // if (!root) {
  //     return -1;
  // }
  // if (iter % 2 === 0) {
  // } else {
  // }
};

spiralOrderIterative(tree);

// spiralOrderRecursive(tree);
