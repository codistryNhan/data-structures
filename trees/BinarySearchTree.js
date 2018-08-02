const util = require('../util');
const Node = require('./Node');
const Compare = util.Compare;

class BinarySearchTree {
  constructor(compareFn = util.defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key) {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  //Helper Method
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    let current = node;
    if (node != null) {
      if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
        return this.searchNode(node.left, key);
      } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
        return this.searchNode(node.right, key);
      } else {
        return node;
      }
    }
    return false;
  }

  remove(key) {
    return this.removeNode(this.root,key);
  }

  removeNode(node, key) {
    if(node == null) {
      return false;
    }

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      //case 1, leaf node
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      }
      //case 2, 1 child
      if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }
      //case 3, 2 child
      const minRightNode = this.minNode(node.right);
      node.key = minRightNode.key;
      node.right = this.removeNode(node.right,minRightNode.key);
      return node;
    }

  }

  //in-order traversal visits all node in ascending order.
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  //pre-order traversal visits node prior to its descendants
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  //Find the minimum value in the binary tree
  min() {
    return this.minNode(this.root);
  }

  // minHelper(node, callback) {
  //   if (node != null) {
  //     this.minHelper(node.left, callback);
  //     if (node.left == null) {
  //       callback(node.key);
  //     }
  //   }
  // }
  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  //find the max value in binary tryy
  max(callback) {
    return this.maxNode(this.root);
  }

  // maxHelper(node, callback) {
  //   if (node != null) {
  //     this.maxHelper(node.right, callback);
  //     if (node.right == null) {
  //       callback(node.key);
  //     }
  //   }
  // }
  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

}

module.exports = BinarySearchTree;
