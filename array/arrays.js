//Arrays
  //Initializing arrays
  let numbers = [2,4,6,8,10];

//Iterating an array
  //Using a for loop
  console.log('for loop');
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
  console.log();

  //using a for-of loop
  console.log('for-of loop');
  for (let num of numbers) {
    console.log(num);
  }

//Inserting Elements
  //Inserting elements at the end of an array
  numbers[numbers.length] = 12;
  numbers.push(13);
  numbers.push(14, 15);
  console.log();

  //Inserting elements in the front of the array
  Array.prototype.insertFirst = function(element) {
    for (let i = this.length; i >= 0; i--) {
      this[i] = this[i - 1];
    }
    console.log(`Inserting ${element} to first position of array`);
    this[0] = element;
  }

  numbers.insertFirst(66);
  console.log(numbers);
  console.log();

  //Inserting using unshift
  console.log('Insert front using unshift()');
  numbers.unshift(65);
  console.log(numbers);
  console.log();

//Removing elements
  //Remove an element from the end of the array using pop()
  console.log('Removing element at the end of the array using pop()');
  numbers.pop();
  console.log(numbers);
  console.log();

  //Remove an element from the front of the array using shift()
  console.log('Remove front element using shift()');
  numbers.shift();
  console.log(numbers);
  console.log();

//Adding and removing from any position
  //use splice();
  //splice(index, num of elements to remove);
  console.log('Reinitializing array to 1 2 3 4 5');
  numbers = [1,2,3,4,5];
  console.log(numbers);
  console.log();

  //remove 3 4 5
  console.log('Removing 3 4 5');
  numbers.splice(2, 3);
  console.log(numbers);
  console.log();

  //add 3 4 5
  console.log('Adding back 3 4 5');
  numbers.splice(2, 0, 3 ,4 ,5);
  console.log(numbers);
  console.log();
