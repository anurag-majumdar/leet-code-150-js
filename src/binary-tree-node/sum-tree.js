const tree = require('./tree').tree5;

const getSum = (root) => {
  if (!root) return 0;

  const old = root.value;
  return getSum(root.left) + getSum(root.right) + old;
};

const output = getSum(tree);
console.log(output);
