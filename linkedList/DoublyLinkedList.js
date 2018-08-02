const LinkedList = require('./LinkedList');
const util = require('../util');

class DoublyNode {
  constructor(element) {
    this.element = element;
    this.next = undefined;
    this.prev = undefined;
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = util.defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          this.head = node;
        } else {
          this.head = node;
          current.prev = node;
          node.next = current;
        }
      } else if (index === this.count) {
        let current = this.tail;
        this.tail = node;
        current.next = node;
        node.prev = current;
      } else {
        let previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
        node.next = current;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
        //If there is only one item on the list, tail be undefined
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        let previous = curret.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  push(element) {
    let node = new DoublyNode(element);

    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      let current = this.tail;
      this.tail = node;
      node.prev = current;
      current.next = node;
    }
    this.count++;
    return true;
  }

}

module.exports = DoublyLinkedList;
