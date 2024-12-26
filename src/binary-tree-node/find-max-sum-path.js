const Node = require('./tree').Node;

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(8);
tree.left.right = new Node(4);
tree.right.left = new Node(5);
tree.right.right = new Node(6);
tree.left.right.left = new Node(10);
tree.right.left.left = new Node(7);
tree.right.left.right = new Node(9);
tree.right.right.right = new Node(5);

const formMaxSumPathMap = (root, pathList, sum, pathMap) => {
  if (!root) return;

  if (!root.left && !root.right) {
    sum += root.value;
    pathMap[sum] = [...pathList, root.value];
    return;
  }

  formMaxSumPathMap(root.left, [...pathList, root.value], sum + root.value, pathMap);
  formMaxSumPathMap(root.right, [...pathList, root.value], sum + root.value, pathMap);
};

const printMaxSumPath = (pathMap) => {
  let maxSum = Number.MIN_VALUE;

  Object.keys(pathMap).forEach((sumKey) => {
    const sum = JSON.parse(sumKey);
    if (maxSum < sum) maxSum = sum;
  });

  console.log(pathMap[maxSum]);
};

const findMaxSumPath = (tree) => {
  const pathMap = {};

  formMaxSumPathMap(tree, [], 0, pathMap);
  printMaxSumPath(pathMap);
};

findMaxSumPath(tree);
