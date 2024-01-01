// CLASS: IntHash
//
// Author: Abdulaziz Yahaya
//
// REMARKS: manages hashable objects of type String
//
//-----------------------------------------

let Hashable = require("./Hashable")
class IntHash extends Hashable{

    constructor(value) {
        super(value);
    }

    hashVal() {
        return this.getValue;
    }//end of hashVal

    equals(x) {
        let condition = false;
        if( x instanceof IntHash){

            if( this.getValue === x.getValue ){

                condition = true
            }
        }else {
            //console.log("Only intHash objects can be compared to each other");
            return;
        }
        return condition;
    }
}//end of intHash class

module.exports = IntHash;
