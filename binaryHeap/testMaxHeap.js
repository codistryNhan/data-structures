const MaxHeap = require('./MaxHeap');

let heap = new MaxHeap();

heap.insert(5);
console.log(heap.heap);

heap.insert(10);
console.log(heap.heap);

heap.insert(1);
console.log(heap.heap);

heap.insert(8);
console.log(heap.heap);

heap.insert(3);
console.log(heap.heap);

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

console.log(heap.extract());
console.log(heap.heap);

console.log(heap.extract());
console.log(heap.heap);

console.log(heap.extract());
console.log(heap.heap);

console.log(heap.extract());
console.log(heap.heap);

console.log(heap.extract());
console.log(heap.heap);
