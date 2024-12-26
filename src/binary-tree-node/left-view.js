const tree = require('./tree').tree3;

const nodeList = [];

const leftViewIterative = (root) => {

    if (!root) {
        return;
    }

    const q = [root];

    while (q.length > 0) {
        let levelNodes = q.length;
        let firstNodeFlag = true;

        while (levelNodes > 0) {
            const node = q.shift();

            if (firstNodeFlag) {
                nodeList.push(node.value);
                firstNodeFlag = false;
            }

            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }

            levelNodes--;
        }

    }
};

const leftViewRecursive = (root) => {

};

leftViewIterative(tree);
console.log(nodeList);
