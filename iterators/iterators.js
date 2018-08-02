//Iterator functions
  //Functions that help iterate elements of arrays
  //forEach
  //every
  //some
  //map
  //filter
  //reduce

  const isEven = num => num % 2 === 0;

  let numbers = [1,2,3,4,5,6,7,8,9,10];
  let evens = [2,4,6,8,10,12];
  let odds = [1,3,5,7,9,11];
  //forEach
    //forEach will iterate through every element
    console.log('forEach iterator');
    numbers.forEach( num => {
      console.log(num);
    });
    console.log();

  //Every
    //Will iterate through every element until the function returns false.
    //If a condition returns false, the function will stop and return false
    //else the function will return true.

    //Returns true because every element is an even
    console.log('Every iterator');
    console.log(evens.every(isEven));
    console.log();
    //Returns false at the first element because odd
    console.log('Every iterator');
    console.log(odds.every(isEven));
    console.log();

  //Some
    //Some does the opposite of every
    //it will iterate through each element until the function returns true
    console.log('Some iterator');
    console.log(evens.some(isEven));
    console.log();

  //Map
    //Map will iterate each element and store each return result in a new array
    console.log('Map iterator');
    console.log(evens.map(isEven));
    console.log();

  //filter
    //will iterate through each element, the iterations that return true
    //will be added into a new array
    console.log('Filter')
    console.log(numbers.filter(isEven));
    console.log();

  //reduce
    //is an accumulator function, use to sum up elements
    //reduce( (previous, current) )
   console.log('Reduce');
   console.log(evens.reduce( (prev, curr) => prev + curr ));

  //Sorting numbers
  let nums = [8,6,4,3,2,1];
  let arr = nums.sort( (a,b) => a - b);
  console.log(arr);

  //Searching Arrays
    //indexOf(element)

    //lastIndexOf(element)

    //find
    //Returns the first element that returns true
    console.log('Find');
    arr = nums.find( element => element % 2 === 0 );
    console.log(arr);
    console.log();

    //findIndex
    //Returns the first index that returns true
    console.log('FindIndex');
    arr = nums.findIndex( element => element % 2 === 0 );
    console.log(arr);
    console.log();
