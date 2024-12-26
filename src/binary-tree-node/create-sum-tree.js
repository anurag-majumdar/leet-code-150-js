const tree = require('./tree').tree5;

const createSumTree = (root) => {
  if (!root) return 0;

  const old = root.value;
  root.value = createSumTree(root.left) + createSumTree(root.right);

  return root.value + old;
};

const printPreOrderTree = (root) => {
  if (!root) return;

  console.log(root.value);
  printPreOrderTree(root.left);
  printPreOrderTree(root.right);
};

createSumTree(tree);
printPreOrderTree(tree);

module.exports = { tree };
