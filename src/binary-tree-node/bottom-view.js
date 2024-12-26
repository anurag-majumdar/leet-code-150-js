const tree = require('./tree').tree4;

let nodeList = [];

// {
//     0: [value, level]
// }

const bottomViewIterative = (root) => {
  if (!root) {
    return;
  }

  const q = [[0, root]];
  const map = {};
  let level = 1;
  let distance;

  while (q.length > 0) {
    let levelNodes = q.length;

    while (levelNodes > 0) {
      const nodeMeta = q.shift();
      distance = nodeMeta[0];
      const node = nodeMeta[1];

      if (!map[distance]) {
        map[[distance]] = [level, node.value];
      } else if (map[distance]) {
        const nodeLevel = map[distance][0];
        if (level > nodeLevel) {
          map[[distance]] = [level, node.value];
        }
      }

      if (node.left) {
        q.push([distance - 1, node.left]);
      }
      if (node.right) {
        q.push([distance + 1, node.right]);
      }

      levelNodes--;
    }
    level++;
  }

  for (const nodeMeta of Object.values(map)) {
    nodeList = [...nodeList, nodeMeta[1]];
  }
};

const bottomViewRecursive = (root) => {};

bottomViewIterative(tree);
console.log(nodeList);
