const Queue = require('./Queue');

const q = new Queue();

q.enqueue(5);
q.enqueue(10);
console.log(q.toString());
console.log(`Size: ${q.size()}`);

q.dequeue();
console.log(q.toString());
console.log(`Size: ${q.size()}`);

q.dequeue();
console.log(q.toString());
console.log(`Size: ${q.size()}`);

q.enqueue(5);
q.enqueue(10);
console.log(q.toString());
console.log(`Size: ${q.size()}`);
