// CLASS: StringHash
//
// Author: Abdulaziz Yahaya
//
// REMARKS: manages hashable objects of type String
//
//-----------------------------------------
let Hashable = require("./Hashable")
class StringHash extends Hashable{

    constructor( value) {
        super(value);
    }

    hashVal() {//comeback and debug

        let p = 97; //prime number of our choice
        let n = this.getValue.length
        let j = n-1;
        let hash = this.getValue.charCodeAt(0) * (p**j)

        for (let i = 1; i < n; i++) {

            j--;
            hash = this.getValue.charCodeAt(i) * (p**j)

        }
        return hash;
    }//end of hashVal

    equals(x) {

        let condition = false;
        if( x instanceof StringHash){

            if( this.getValue === x.getValue ){

                condition = true
            }
        }else {
            //console.log("Only StringHash objects can be compared to each other");
            return;
        }
        return condition;
    }//end of equals
}//end of StringHash class

module.exports = StringHash;