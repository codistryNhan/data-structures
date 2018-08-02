//Palindrome
//Check if a string is a Palindrome using Deque

const Deque = require('./Deque');

function isPalindrome(string) {
  if (string.length === 0) {
    return false;
  }

  string = string.toLowerCase();
  let deque = new Deque();
  let isEqual = true;

  for (let i = 0; i < string.length; i++) {
    deque.addBack(string[i]);
  }

  while (deque.size() > 1) {
    if (deque.removeFront() !== deque.removeBack()){
      isEqual = false;
    }
  }

  return isEqual;
}

let string = 'notapalindrome';
console.log(isPalindrome(string));
