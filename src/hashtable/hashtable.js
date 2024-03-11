//constuctor for hash table
class HashTable {
    constructor(size=7){
        this.dataMap = new Array(size);
    }

    //hash function
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            //asign random with prime number  - example: 23
            hash = (hash + key.charCodeAt(i)* 23) % this.dataMap.length
        }
        return hash;
    }

    //setter
    set(key, value) {
        let index = this._hash(key); //pass the key to the hash function and return value set as index
        
        //check if it is empty
        if(!this.dataMap[index]){
            this.dataMap[index] = []; //push the empty array into the hash table by index
        }

        this.dataMap[index].push([key, value]); //push the value pair into the array inside the pointed index
        return this;
    }
}

//create hash table
let myHashTable = new HashTable();

//set value
myHashTable.set('earphones', 10);