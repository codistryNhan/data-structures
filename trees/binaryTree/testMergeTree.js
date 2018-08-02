const BinaryTree = require('./BinaryTree');

let treeA = new BinaryTree();
let treeB = new BinaryTree();
let treeC = new BinaryTree();

treeA.insert(5);
treeA.insert(3);
treeA.insert(7);

treeB.insert(10);
treeB.insert(6);
treeB.insert(12);
treeB.insert(17);

treeA.mergeTree(treeB.root);
console.log(treeA.root);
