class MaxHeap{
  constructor() {
    this.heap = [];
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }

    return Math.floor( (index - 1) / 2 );
  }

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

    while (this.heap[parent] != null && this.heap[parent] < this.heap[index]) {
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

    let removedElement = this.heap.shift();
    this.siftDown(0);
    return removedElement;
  }

  siftDown(index) {
    let element = index;
    let left = this.getLeftIndex(index);
    let right = this.getRightIndex(index);

    if (this.heap[element] < this.heap[left]) {
      element = left;
    }

    if (this.heap[element] < this.heap[right]) {
      element = right;
    }

    if (index !== element) {
      swap(this.heap, index, element);
      index = element;
      this.siftDown(index);
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

let swap = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]];
}

module.exports = MaxHeap;
