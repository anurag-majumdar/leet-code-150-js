const tree1 = require('../binary-tree').tree1;
const tree2 = require('../binary-tree').tree2;

// Iterative Solution
const checkIterativeIdentical = (root1, root2) => {
  if (!root1 && !root2) {
    return true;
  } else {
    if ((!root1 && root2) || (root1 && !root2)) {
      return false;
    }
  }

  const queue1 = [root1];
  const queue2 = [root2];

  while (queue1.length > 0 && queue2.length > 0) {
    const node1 = queue1.shift();
    const node2 = queue2.shift();

    if (node1.value !== node2.value) {
      return false;
    }

    if (node1.left && node2.left) {
      queue1.push(node1.left);
      queue2.push(node2.left);
    } else {
      if (!node1.left && !node2.left) {
        continue;
      } else {
        return false;
      }
    }

    if (node1.right && node2.right) {
      queue1.push(node1.right);
      queue2.push(node2.right);
    } else {
      if (!node1.right && !node2.right) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};

// Recursive Traversal
const checkRecursiveIdentical = (root1, root2) => {};

const iterativeIdentical = checkIterativeIdentical(tree1, tree2);
console.log(iterativeIdentical);

// const recursiveIdentical = checkRecursiveIdentical(tree1, tree2);
// console.log(recursiveIdentical);
