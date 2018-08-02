const Set = require('./Set');

let set = new Set();

set.add(1);
set.add(5);
set.add(10);
console.log(set.values());
console.log(set.size());
set.add(1);
console.log(set.values());
console.log(set.size());
set.delete(1);
console.log(set.values());
console.log(set.size());
