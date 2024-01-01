// CLASS: Node
//
// Author: Abdulaziz Yahaya
//
// REMARKS: used to hold info in the dictionary and manage linkedlist in the dictionary
//
//-----------------------------------------

class Node{

    constructor( k, v, next = null) {

        this.k = k;//a key
        this.v = v;//a value
        this.next = next;//next node
    }


    //getters and setters
    get getKey(){
        return this.k;
    }

    get getValue(){
        return this.v;
    }

    get getNext(){
        return this.next;
    }

    set setValue( x){
        this.v = x;
    }

}//end of Node

module.exports = Node;