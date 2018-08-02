const util = require('../util');
const swap = util.swap;
const randomArray = util.createRandomArray(10);

function selectionSort(array) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (array[i] > array[j]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}

console.log(randomArray);
console.log(selectionSort(randomArray));
