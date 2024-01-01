// CLASS: Dictionary
//
// Author: Abdulaziz Yahaya
//
// REMARKS: Holds a list of  key, value pairs in a HashTable
//
//-----------------------------------------

let Node = require("./Node")
let IntHash = require("./IntHash")

class Dictionary{

    constructor( size) {

        this.size = size;
        this.numOfPairs = 0;
        this.dict = new Array( size);
        for (let i = 0; i < size; i++) {

            this.dict[i] = new Node( new IntHash(-1), -1, null)
        }
    }//end of constructor

    put( k, v){

        let index = k.hashVal() % this.size;//get the index we want to place the value

        if( !this.contains(k)){//if not in the hashTable add to it

            let index = k.hashVal() % this.size;

            let newKey = new Node( k, v, this.dict[index]);//add to linkedlist at the index

            this.dict[index] = newKey;
            this.numOfPairs++;//keep track of values added

        }else {//if already in the hashTable replace v

            let curr = this.dict[index];
            while( curr){//look for the hash value

                if( curr.getKey.equals( k) ){

                    //set the value of the key pair to the new value
                    curr.setValue = v;//come back and verify
                }
                curr = curr.getNext;
            }
        }

    }//end of put

    get(k){//returns the value associated to a key
        if( this.contains( k)){
            let index = k.hashVal() % this.size;
            let curr = this.dict[index];
            while( curr){//look for the hash value

                if( curr.getKey.equals( k)){
                    return curr.getValue;
                }
                curr = curr.getNext;
            }
        }
        return undefined;//if not found return undefined
    }//end of get method

    contains( k){
        let index = k.hashVal() % this.size;
        let curr = this.dict[index];
        while( curr){//look for the hash value

            if( (curr.getKey).equals( k)){
                return true;
            }
            curr = curr.getNext;
        }
        return false;
    }//end of contains

    isEmpty(){//if empty numOfPairs is 0
        return this.numOfPairs == 0;
    }
}//end of Dictionary

module.exports = Dictionary;