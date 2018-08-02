const util = require('../util');
const swap = util.swap;
const randomArray = util.createRandomArray(10);

function insertionSort(array) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (array[j] < array[j-1]){
        swap(array, j, j-1);
      } else {
        break;
      }
    }
  }
  return array;
}

console.log(randomArray);
console.log(insertionSort(randomArray));
