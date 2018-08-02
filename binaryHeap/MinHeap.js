let util = require('../util');
let Compare = util.Compare;

class MinHeap {
  constructor(compareFn = util.defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }

  //Get index of the left child
  getLeftIndex(index) {
    return 2 * index + 1;
  }

  //Get index of right child
  getRightIndex(index) {
    return 2 * index + 2;
  }

  //Get index of parent of the index
  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }

    return Math.floor ((index - 1) / 2);
  }

  //Insert value at the end of the heap, and bubbleup to the correct position
  insert(value) {
    if (value != null) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }

  siftUp(index) {
    let parent = this.getParentIndex(index);
    while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN) {
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }

  extract() {
    if (this.isEmpty()) {
      return undefined;
    }

    if (this.size() === 1) {
      return this.heap.shift();
    }

    const removedValue = this.heap.shift();
    this.siftDown(0);
    return removedValue;
  }

  siftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();
    if ( left < size && this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN) {
      element = left;
    }

    if ( right < size && this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN) {
      element = right;
    }

    if (index !== element) {
      swap(this.heap, index, element);
      this.siftDown(element);
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }
}

const swap = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]];
}

module.exports = MinHeap;
