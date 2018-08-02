const Set = require('./Set');

let setA = new Set();
setA.add(1);
setA.add(3);
setA.add(5);

let setB = new Set();
setB.add(2);
setB.add(4);
setB.add(6);

let union = setA.union(setB);
console.log(union.values());
