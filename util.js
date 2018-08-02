function defaultEquals(a,b) {
  return a === b;
}

function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }

  return item.toString();
}

function defaultCompare(a,b) {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}

function createRandomArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }
  return array;
}

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};

module.exports = {
  defaultEquals,
  defaultToString,
  defaultCompare,
  Compare,
  swap,
  createRandomArray
}
