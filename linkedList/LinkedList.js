const Node = require('./Node');
const util = require('../util');

class LinkedList {
  constructor(equalsFn = util.defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  //Adds a new element to the end of the list
    //if list is empty, assign node to head
    //else iterate nodes and add node to the end
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  //Inserts a new element to a specified position
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      let node = new Node(element);

      if (index === 0) {
        let current = this.head;
        node.next = current;
        this.head = node;
      } else {
        let previous = this.getElementAt(index - 1);
        let current = previous.next;
        previous.next = node;
        node.next = current;
      }
      this.count++;
      return true;
    }

    return false;
  }

  //Returns the element at specified position
    //iterate through the list until desired index
    //return element
  getElementAt(index){
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  //Removes an element from the list
  remove(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  //Returns position of element
    //iterate through list until an element matches
    //keep an index, return position
  indexOf(element) {
    let current = this.head;
    for(let i = 0; i < this.count && current != null; i++){
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  //Removes element at specified position
    //Check if index in the bound, between 0 and max number of elements
      //if index is at the beginning, point head to next node
      //else, iterate to index node and point previous node to current.next
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (index === 0) {
        this.head = current.next;
      } else {
        let previous = this.getElementAt(index - 1);
        current = previous.next
        previous.next = current.next;
      }

      this.count--;
      return current.element;
    }

    console.log('Index out of bounds');
    return undefined;
  }

  //Returns true if list is empty
  isEmpty() {
    return this.count === 0;
  }

  //Returns number of elements in list
  size() {
    return this.count;
  }

  //Returns string representation of the list
  toString() {
    if (this.head == null) {
      return '';
    }

    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.count && current != null; i++) {
      objString = `${objString}, ${current.element}`;
      current = current.next;
    }

    return objString;
  }

  //Get head of LinkedList
  getHead() {
    return this.head;
  }
}

module.exports = LinkedList;
