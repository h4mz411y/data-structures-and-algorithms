const LinkedList = require('./linkedList');

class HashMap {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  hash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;
  }
  add(key, value) {
    const hash = this.hash(key);
    if (!this.table[hash]) {
      const obj = { [key]: [value] };
      this.table[hash] = obj;
    } else {
      let entries = Object.entries(this.table[hash])[0];
      entries[1].push(value);
    }
  }

  addHashed(hash, value) {
    let output = [];
    let key = Object.keys(this.table[hash])[0];
    output.push(key);
    let existingValues = Object.values(this.table[hash])[0];
    for (let i = 0; i < existingValues.length; i++) {
      output.push(existingValues[i]);
    }
    if (value) {
      let newValues = Object.values(value)[0];
      for (let i = 0; i < newValues.length; i++) {
        output.push(newValues[i]);
      }
    } else {
      output.push(null);
    }
    this.table[hash] = output;
  }
}

module.exports = HashMap;
