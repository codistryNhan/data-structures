const Node = require('./Node');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(node, key) {
    let newNode = new Node(key);
    if(node == null) {
      node = newNode;
    } else if (key < node.key) {
      node.left = this.insertNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.insertNode(node.right, key)
    }

    return node;
  }

  //Inorder visits node in ascending order
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root);
  }

  inOrderTraverseNode(node) {
    if(node == null) {
      return;
    }

    this.inOrderTraverseNode(node.left);
    console.log(node.key);
    this.inOrderTraverseNode(node.right);
  }

  mergeTree(otherRoot) {
    return this.mergeTreeHelper(this.root, otherRoot);
  }

  mergeTreeHelper(nodeA, nodeB) {
    if(!nodeA) {
      return nodeB;
    }
    if(!nodeB) {
      return nodeA
    }
    nodeA.key += nodeB.key;
    nodeA.left = this.mergeTreeHelper(nodeA.left, nodeB.left);
    nodeA.right = this.mergeTreeHelper(nodeA.right, nodeB.right);
    return nodeA;
  }
}

module.exports = BinaryTree;
