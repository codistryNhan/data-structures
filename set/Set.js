class Set {
  constructor() {
    this.items = {};
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  has(element) {
    //return element in items;

    //The in operator also searches up the prototype chain for key,
    //we want to only search the instance object. So we use the
    //hasOwnProperty.call() from tje Object class.
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    //Object.values() was added in ECMAScript 2017
    //return Object.values(this.items);
    let values = [];
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(this.items[key]);
      }
    }
    return values;
  }

  //Return a set with unique values from both sets
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  }

  //Return a set with values if each set has the value
  intersection(otherSet) {
    const intersection = new Set();
    // this.values().forEach(value => {
    //   if(otherSet.has(value)) {
    //     intersection.add(value);
    //   }
    // });
    //
    // return intersection;

    //Optimize intersection, iterate the set with smaller size
    let largerSet = this.values();
    let smallerSet = otherSet.values();
    if (largerSet.length - smallerSet.length < 0) {
      [largerSet, smallerSet] = [smallerSet, largerSet];
    }
    smallerSet.forEach(value => {
      if (largerSet.includes(value)) {
        intersection.add(value);
      }
    });
    return intersection;
  }

  difference(otherSet) {
    const difference = new Set();
    this.values().forEach( value => {
      if (!otherSet.has(value)) {
        difference.add(value);
      }
    })
    return difference;
  }

  subset(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    
    let subset = true;
    this.values().every(value => {
      if (!otherSet.has(value)) {
        subset = false;
        return false
      }
      return true;
    });
    return subset;
  }
}

module.exports = Set;
