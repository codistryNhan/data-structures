const Set = require('./Set');

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(10);

let setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

console.log(setA.subset(setB));
