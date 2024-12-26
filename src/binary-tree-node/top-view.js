const tree = require('./tree').tree4;

let nodeList = [];

// {
//     0: [value, level]
// }

const topViewIterative = (root) => {
  if (!root) {
    return;
  }

  const q = [[0, root]];
  const map = {};
  let distance;

  while (q.length > 0) {
    const nodeMeta = q.shift();
    distance = nodeMeta[0];
    const node = nodeMeta[1];

    if (!map[distance]) {
      map[[distance]] = node.value;
    }

    if (node.left) {
      q.push([distance - 1, node.left]);
    }
    if (node.right) {
      q.push([distance + 1, node.right]);
    }
  }

  Object.values(map).forEach((nodeValue) => {
    nodeList = [...nodeList, nodeValue];
  });
};

const topViewRecursive = (root) => {};

topViewIterative(tree);
console.log(nodeList);
