const tree = require('./tree').tree3;

const findNextNodeSameLevelIterative = (root, nodeValue) => {
  if (!root) {
    return;
  }

  const q = [root];

  while (q.length > 0) {
    let levelNodes = q.length;

    while (levelNodes > 0) {
      const node = q.shift();

      if (node.value === nodeValue) {
        const adjacentNode = q.shift();
        levelNodes--;
        if (levelNodes > 0) {
          return adjacentNode.value;
        } else {
          return null;
        }
      }

      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }

      levelNodes--;
    }
  }
};

const findNextNodeSameLevelRecursive = (root, nodeValue) => {};

const output = findNextNodeSameLevelIterative(tree, 2);
console.log(output);
