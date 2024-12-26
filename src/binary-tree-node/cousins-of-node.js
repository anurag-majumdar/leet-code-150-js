const tree = require('./tree').tree1;

const resultList = [];

const cousinsOfNodeIterative = (root, nodeValue) => {
  if (!root) {
    return;
  }

  let q = [[null, root]];
  let cousinLevel = 1;
  let parentNodeValue;
  let flag = 0;
  while (q.length > 0) {
    let levelNodes = q.length;

    while (levelNodes > 0) {
      const nodeList = q.shift();

      if (nodeList[1].value === nodeValue) {
        parentNodeValue = nodeList[0].value;
        flag = 1;
        break;
      }

      if (nodeList[1].left) {
        q.push([nodeList[1], nodeList[1].left]);
      }
      if (nodeList[1].right) {
        q.push([nodeList[1], nodeList[1].right]);
      }
      levelNodes--;
    }
    if (flag === 1) {
      break;
    }
    cousinLevel++;
  }

  q = [[null, root]];
  let level = 1;
  let cousinNodeList = [];
  while (q.length > 0) {
    let levelNodes = q.length;
    if (level === cousinLevel) {
      cousinNodeList = q;
      break;
    }

    while (levelNodes > 0) {
      const nodeList = q.shift();

      if (nodeList[1].left) {
        q.push([nodeList[1], nodeList[1].left]);
      }
      if (nodeList[1].right) {
        q.push([nodeList[1], nodeList[1].right]);
      }
      levelNodes--;
    }
    level++;
  }

  // console.log(cousinNodeList);
  // console.log(parentNodeValue);

  cousinNodeList.forEach(([parentNode, node]) => {
    if (parentNode.value !== parentNodeValue) {
      resultList.push(node.value);
    }
  });
};

const cousinsOfNodeRecursive = (root, nodeValue) => {};

cousinsOfNodeIterative(tree, 6);
console.log(resultList);
