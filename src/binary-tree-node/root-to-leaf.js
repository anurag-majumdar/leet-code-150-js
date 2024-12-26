const Node = require('./tree').Node;

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);
tree.right.left.left = new Node(8);
tree.right.left.right = new Node(9);

const rootToLeafPath = (root, pathList) => {
  if (!root) {
    return;
  }

  if (!root.left && !root.right) {
    console.log([...pathList, root.value]);
    return;
  }

  rootToLeafPath(root.left, [...pathList, root.value]);
  rootToLeafPath(root.right, [...pathList, root.value]);
};

rootToLeafPath(tree, []);
