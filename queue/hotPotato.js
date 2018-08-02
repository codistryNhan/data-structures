const Queue = require('./Queue');

function hotPotato(elementList, num) {
  let queue = new Queue();
  let eliminatedList = [];

  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }

    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  };

}

let list = ['Johnny', 'Suky', 'David', 'Bob', 'Thalia'];
let num = 16;

let result = hotPotato(list, num);

result.eliminated.forEach( name => {
  console.log(`${name} has been eliminated`);
});

console.log(`The winner is ${result.winner}`);
