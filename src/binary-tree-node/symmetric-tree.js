const tree = require('./tree').tree5;

const isSymmetricIterative = (root) => {
    if (!root) {
        return true;
    }

    const q = [[root.left, root.right]];
    while (q.length > 0) {
        const nodeList = q.shift();

        const node1 = nodeList[0];
        const node2 = nodeList[1];

        if (!node1 && !node2) {
            continue;
        }

        if (!node1 || !node2) {
            return false;
        }

        // if (node1 && node2) {
        // if (node1.left && node2.right) {
        q.push([node1.left, node2.right]);
        // } else if (!node1.left || !node2.right) {
        //     return false;
        // }

        // if (node1.right && node2.left) {
        q.push([node1.right, node2.left]);
        // } else if (!node1.right || !node2.left) {
        //     return false;
        // }
        // }
    }
    return true;
};

const isSymmetric = (node1, node2) => {
    if (!node1 && !node2) {
        return true;
    }

    if (!node1 || !node2) {
        return false;
    }

    return (node1 && node2) && isSymmetric(node1.left, node2.right) && isSymmetric(node1.right, node2.left);
};

const isSymmetricRecursive = (root) => {
    if (!root) {
        return true;
    }

    return !!isSymmetric(root.left, root.right);
};

const output1 = isSymmetricIterative(tree);
const output2 = isSymmetricRecursive(tree);
console.log(output1, output2);
