const Stack = require('./Stack');

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());
console.log(stack.toString());
