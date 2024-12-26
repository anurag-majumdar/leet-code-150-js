class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree1 = new Node(1);

tree1.left = new Node(2);
tree1.right = new Node(3);

tree1.left.left = new Node(4);
tree1.left.right = new Node(5);

tree1.right.left = new Node(6);
tree1.right.right = new Node(7);

const tree2 = new Node(1);

tree2.left = new Node(2);
tree2.right = new Node(3);

tree2.left.left = new Node(4);
// tree2.left.left = null;
tree2.left.right = new Node(5);

tree2.right.left = new Node(6);
tree2.right.right = new Node(7);

// console.log(tree1);

const tree3 = new Node(1);

tree3.left = new Node(2);
tree3.right = new Node(3);

tree3.left.left = null;
tree3.left.right = new Node(4);

tree3.right.left = new Node(5);
tree3.right.right = new Node(6);

tree3.right.left.left = new Node(7);
tree3.right.left.right = new Node(8);

// Top and Bottom View
const tree4 = new Node(1);

tree4.left = new Node(2);
tree4.right = new Node(3);

tree4.right.left = new Node(5);
tree4.right.right = new Node(6);

tree4.right.left.left = new Node(7);
tree4.right.left.right = new Node(8);

const tree5 = new Node(1);
tree5.left = new Node(2);
tree5.right = new Node(3);

const sumTree = new Node(44);
sumTree.left = new Node(9);
sumTree.right = new Node(13);

sumTree.left.left = new Node(4);
sumTree.left.right = new Node(5);

sumTree.right.left = new Node(6);
sumTree.right.right = new Node(7);

const inPlaceSumTree = new Node(1);
inPlaceSumTree.left = new Node(2);
inPlaceSumTree.right = new Node(3);
inPlaceSumTree.left.right = new Node(4);
inPlaceSumTree.right.left = new Node(5);
inPlaceSumTree.right.right = new Node(6);
inPlaceSumTree.right.left.left = new Node(7);
inPlaceSumTree.right.left.right = new Node(8);

const inPlaceSumTree2 = new Node(10);
inPlaceSumTree2.left = new Node(-2);
inPlaceSumTree2.right = new Node(6);
inPlaceSumTree2.left.left = new Node(8);
inPlaceSumTree2.left.right = new Node(-4);
inPlaceSumTree2.right.left = new Node(7);
inPlaceSumTree2.right.right = new Node(5);

module.exports = {
  tree1,
  tree2,
  tree3,
  tree4,
  tree5,
  sumTree,
  inPlaceSumTree,
  inPlaceSumTree2,
  Node,
};
