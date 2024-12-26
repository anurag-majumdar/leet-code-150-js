const tree1 = require('./tree').tree1;
const tree2 = require('./tree').tree2;

const areTreesIdenticalIterative = (root1, root2) => {

    if (root1 == null && root2 == null) {
        return true;
    }

    if (root1 == null || root2 == null) {
        return false;
    }

    const q = [[root1, root2]];

    while (q.length > 0) {
        const nodeList = q.shift();
        const node1 = nodeList[0];
        const node2 = nodeList[1];

        if (node1.value != node2.value) {
            return false;
        }

        if (node1.left && node2.left) {
            q.push([node1.left, node2.left]);
        } else if (node1.left || node2.left) {
            return false;
        }

        if (node1.right && node2.right) {
            q.push([node1.right, node2.right]);
        } else if (node1.right || node2.right) {
            return false;
        }
    }

    return true;
};

const areTreesIdenticalRecursive = (root1, root2) => {

};

const output = areTreesIdenticalIterative(tree1, tree2);

console.log(output);
