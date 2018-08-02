const LinkedList = require('./LinkedList');
const Node = require('./Node');

class CircularLinkedList extends LinkedList {
  constructor(element) {
    super(element);
  }

  insert(element, index) {
    if(index >= && index <= this.count) {
      let node = new Node(element);
      let current = this.head;

      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          this.head = node;
          //Get last node and point to head
          current = this.getElementAt(this.size());
          current.next = this.head;
        }
      } else {
        let previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
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
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          let removed = this.head;
          this.head = this.head.next;
          let end = this.getElementAt(this.count - 1);
          end.next = this.head;
          current = removed;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }

    return undefined;
  }

}
