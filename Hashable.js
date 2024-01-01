// CLASS: Hashable
//
// Author: Abdulaziz Yahaya
//
// REMARKS: manages hashable objects that fit into the dictionary
//
//-----------------------------------------
class Hashable{
    #value;
    constructor (value) {
        if (this.constructor === Hashable) {
            throw new Error("can't create instance of Hashable.");

        } else {

            this.#value = value;
        }
    }

    get getValue(){//returns the value of the integar
        return this.#value;
    }

    set setValue(x){
        this.#value = x;
    }

    hashVal() {
        throw new Error("missing hash function in the subclasses.");
    }

    equals(){
        throw new Error("missing equals function in the subclasses.");
    }

}//end of Hashable

module.exports = Hashable;