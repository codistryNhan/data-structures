//Decimal to Binary
//Uses a stack to convert decimal numbers
//into its binary counterpart

const Stack = require('./Stack');

function decimalToBinary(decimal) {
  //divide decimal by 2
  //push remainder into Stack
  //pop remainders into string
  //return string

  let stack = new Stack();
  let binaryString = '';

  while ( decimal > 0 ) {
    let remainder = Math.floor(decimal % 2);
    stack.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop();
  }

  return binaryString;
}

console.log(decimalToBinary(10));
