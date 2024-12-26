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
tree2.left.right = new Node(5);
tree2.right.left = new Node(6);
tree2.right.right = new Node(7);

module.exports = { tree1, tree2 };
