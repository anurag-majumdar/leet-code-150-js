const tree = require('./tree').tree1;

const resultList = [];

const areCousinsIterative = (root, node1Value, node2Value) => {

    if (!root) {
        return;
    }

    let q = [[null, root]];
    let node1Level, node2Level;
    let parent1Value, parent2Value;
    let flag1 = 0, flag2 = 0;
    let level = 1;
    while (q.length > 0) {
        let levelNodes = q.length;

        while (levelNodes > 0) {
            const nodeList = q.shift();

            if (nodeList[1].value === node1Value) {
                parent1Value = nodeList[0].value;
                node1Level = level;
                flag1 = 1;
            }

            if (nodeList[1].value === node2Value) {
                node2Level = level;
                parent2Value = nodeList[0].value;
                if (node1Level !== node2Level || parent1Value === parent2Value) {
                    return false;
                } else {
                    flag2 = 1;
                }
            }

            if (flag1 && flag2) {
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
        level++;
    }

    if (flag1 && flag2) {
        if (node1Level === node2Level && parent1Value !== parent2Value) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

};

const areCousinsRecursive = (root, nodeValue) => {

};

const output = areCousinsIterative(tree, 4, 7);
console.log(output);
