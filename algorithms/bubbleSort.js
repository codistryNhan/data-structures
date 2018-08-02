const util = require('../util');
const swap = util.swap;
const randomArray = util.createRandomArray(10);

function bubbleSort(array) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j+1);
      }
    }
  }
  return array;
}

console.log(randomArray);
console.log(bubbleSort(randomArray));
