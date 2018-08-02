const util = require('../util');
const ValuePair = require('./ValuePair');

class Dictionary {
  constructor(toStrFn = util.defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  hasKey(key) {
    retrun this.table[this.toStrFn(key)] != null;
  }

  get(key) {}

  clear() {}

  size() {}

  isEmpty() {}

  keys() {}

  values() {}

  keyValues() {}
  forEach(callBackfn) {}

}
