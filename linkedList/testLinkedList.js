const LinkedList = require('./LinkedList');

const list = new LinkedList();

list.push(1);
list.push(2);
list.insert(3,2);
list.insert(0,0);
list.push(10);
console.log(list.toString());
console.log(list.indexOf(2));
console.log(list.remove(10));
console.log(list.toString());
list.removeAt(0);
console.log(list.toString());
