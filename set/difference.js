const Set = require('./Set');

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);

let union = setA.difference(setB);
console.log(union.values());
