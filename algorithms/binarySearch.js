
const array = [2,6,7,23,45,56,67,80];

function binarySearch(array, value) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = array[mid];
    if (value > element) {
      low = mid + 1;
    } else if (value < element) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return "DOES_NOT_EXIST";
}

console.log(array);
console.log(binarySearch(array, 56));
