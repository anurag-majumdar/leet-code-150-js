const tree = require('./tree').tree1;

// const convertToMirrorValue = (node1, node2) => {
//     if (!node1 || !node2) return;
//     if (!node1 && !node2) return;

//     if (node1 && node2) {
//         // Swap node values
//         const tempNodeValue = node1.value;
//         node1.value = node2.value;
//         node2.value = tempNodeValue;

//         convertToMirrorValue(node1.left, node2.right);
//         convertToMirrorValue(node1.right, node2.left);
//     }
// };

// const convertToMirrorRecursive = (root) => {
//     convertToMirrorValue(root.left, root.right);
// };

const swap = (node) => {
  if (!node) return;

  const tempNode = node.left;
  node.left = node.right;
  node.right = tempNode;
};

const convertToMirrorPointer = (root) => {
  if (!root) return;

  swap(root);
  convertToMirrorPointer(root.left);
  convertToMirrorPointer(root.right);
};

const invertTreeIterative = (root) => {
  if (!root) return;

  const q = [root];
  while (q.length > 0) {
    const node = q.shift();
    if (node) {
      swap(node);
      q.push(node.left);
      q.push(node.right);
    }
  }
};

// convertToMirrorRecursive(tree);
convertToMirrorPointer(tree);
// invertTreeIterative(tree);
console.log(tree);
