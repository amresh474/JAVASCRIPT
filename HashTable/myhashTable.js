class myHashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      hash = (hash + key.charCodeAt(index) * index) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
    // else{
    //     this.data[address].push([key, value]);
    // }
  }

  get(key) {
    let address = this._hash(key);
    const currentBuket = this.data[address];
    if (currentBuket) {
      for (let index = 0; index < currentBuket.length; index++) {
        if (currentBuket[index][0] === key) {
          return currentBuket[index][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    const keyArrays = [];
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index]) {
        console.log(this.data[index][0]);
        keyArrays.push(this.data[index][0][0]);
      }
    }
    return keyArrays;
  }
}

const myHashTabl = new myHashTable(50);
console.log(myHashTabl);
console.log(myHashTabl._hash("agnff"));

myHashTabl.set("amresh", 1890);
myHashTabl.set("kumar", 10000);
myHashTabl.set("sir", 80000);
console.log(myHashTabl.get("amresh"));
console.log(myHashTabl);
console.log(myHashTabl.keys());
