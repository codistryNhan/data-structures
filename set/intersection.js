const Set = require('./Set');

let intersection = new Set();

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);

intersection = setA.intersection(setB);
console.log(intersection.values());
