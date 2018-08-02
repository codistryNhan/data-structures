const BinaryTree = require('./BinaryTree');

let tree = new BinaryTree();
tree.insert(10)
tree.insert(5);
tree.insert(1);
tree.insert(15);
tree.insert(11);
tree.inOrderTraverse();
console.log(tree.root);
