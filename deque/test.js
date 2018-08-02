const Deque = require('./Deque');

let d = new Deque();

d.addFront(5);
d.addFront(10);
d.addFront(15);
console.log(d.toString());
d.removeFront();
d.addFront(100);
console.log(d.toString());
d.addBack(30);
d.addFront(1);
console.log(d.toString());
console.log(d.size());
