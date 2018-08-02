let MinHeap = require('./MinHeap.js')

let heap = new MinHeap();

heap.insert(5);
heap.insert(10);
heap.insert(1);
heap.insert(8);
heap.insert(3);
heap.insert(2);
console.log(heap.heap);
console.log(heap.extract());
console.log(heap.heap);

console.log(heap.extract());
console.log(heap.heap);

console.log(heap.extract());
console.log(heap.heap);

console.log(heap.extract());
console.log(heap.heap);
