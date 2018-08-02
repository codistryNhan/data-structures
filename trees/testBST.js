const BinarySearchTree = require('./BinarySearchTree');

let tree = new BinarySearchTree();

tree.insert(7);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);


// tree.inOrderTraverse(item => {
//   console.log(item);
// });
 tree.remove(9)

tree.preOrderTraverse( each => {
  console.log(each);
});

console.log(tree.getNodeHeight(tree.getRoot()));
