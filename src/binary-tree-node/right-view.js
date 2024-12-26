const tree = require('./tree').tree3;

const nodeList = [];

const rightViewIterative = (root) => {

    if (!root) {
        return;
    }

    const q = [root];

    while (q.length > 0) {
        let levelNodes = q.length;
        // let lastNodeFlag = false;

        while (levelNodes > 0) {
            const node = q.shift();

            if (levelNodes === 1) {
                nodeList.push(node.value);
                // lastNodeFlag = false;
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

const rightViewRecursive = (root) => {

};

rightViewIterative(tree);
console.log(nodeList);
