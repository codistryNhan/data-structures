let setA = [1,2,3,4,5];
let setB = [5,6,7,8,9,10];

let union = new Set([...setA, ...setB]);
console.log(union);

let intersection = new Set([...setA].filter(value => setB.includes(value)));
console.log(intersection);

let difference = new Set([...setA].filter(value => !setB.includes(value)));
console.log(difference);
