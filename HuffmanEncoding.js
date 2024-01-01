// CLASS: HuffmanEncoding
//
// Author: Abdulaziz Yahaya
//
// REMARKS: performs the huffman encoding on a given file
//
//-----------------------------------------

let Dictionary = require("./Dictionary")
let TreeNode = require("./TreeNode")
let HuffmanTree = require("./HuffmanTree")
let StringHash = require("./StringHash")

class HuffmanEncoding {

    constructor( fileName) {
        this.fileName = fileName;
    }

    encode(){

        let fs = require("fs")
        let contents = fs.readFileSync( this.fileName, "utf8")

        let letters = []
        let frequency = []

        //get unique letters
        for (let i = 0; i < contents.length ; i++) {

            if(  !this.contains( contents[i], letters )){//to avoid duplicate letter

                letters.push( contents[i])

            }
        }

        //calculate the frequency of each letter
        for (let i = 0; i < letters.length; i++) {
            let count = 0
            for (let j = 0; j < contents.length; j++) {

                if( letters[i] === contents[j]){
                    count++
                }
            }
            frequency[i] = count
        }

        let total = this.sum( frequency)
        //get the percentages of each distinct letter
        for (let i = 0; i < frequency.length; i++) {

            frequency[i] = frequency[i]/ total
        }

        //place the letter:frequency in the dictionary
        let dict = new Dictionary( 50);
        for (let i = 0; i < letters.length; i++) {

            dict.put( new StringHash(letters[i]), frequency[i])
        }


        let trees = []//holds the list of tress
        //step 1 - make trees for each char
        for (let i = 0; i < letters.length; i++) {

            trees.push( new HuffmanTree( letters[i], dict.get( new StringHash(letters[i])) ))
        }

        while( trees.length != 1){//until only one tree left

            //get 2 smallest trees
            let small1 = this.getSmallest( trees)

            trees.splice( trees.indexOf(small1), 1)

            let small2 = this.getSmallest( trees)
            trees.splice( trees.indexOf(small2), 1)

            let newTree = new HuffmanTree();

            newTree = small1.combine( small1, small2)//combined tree

            trees.push( newTree)

        }//end of while

        let finalTree = trees[0];//tree that contains the final huffman  encoding

        let outputFile = this.fileName + ".huff" //name of the output file

        //write the huffman encoding of the inputFile to the outputFile
        for (let i = 0; i < contents.length; i++) {

            fs.appendFileSync( outputFile , this.getPath(contents[i], finalTree.getRoot, "") + " ")
        }

    }//end of encode


    getPath( char, root, direction){//gets the path of a char in the tree given

        //direction is 0 for left, 1 for right
        let path = direction;
        let curr = root;

        if( curr.getLeft === null && curr.getRight === null && curr.getCharacter != null){//base case - when its the leaf

            if(curr.getCharacter === char){//if the character is found

                path = direction;//get the direction we went

            }else {

                path = null//null if path not found
            }

        }else {//if a normal node( not a leaf node)

            let currPath = path;
            path = this.getPath( char, curr.getLeft, currPath + "0")//check left side of the tree

            if( path === null){//check right if character not found on the left
                path = this.getPath( char, curr.getRight, currPath + "1")
            }
        }

        return path
    }//end of getPath

    getSmallest( trees){//gets the tree of the smallest weight of the array passed in

        let smallest = null;
        smallest = trees[0];//first one
        for (let i = 1; i < trees.length; i++) {

            if( smallest.compareTo( trees[i]) === -1 ) {// if 1 smallest come before tress[i] ..  -1 trees[i] comes before smallest

               smallest = trees[i]

            }else if( smallest.compareTo( trees[i]) ===  0 ) {//come back and fix

            }
        }

        return smallest
    }//end of getSmallest

    contains( char, array) {//true if a char is already in the array

        for (let i = 0; i < array.length; i++) {
            if( array[i] === char){//if found
                return true
            }
        }
        return false;
    }//end of contains

    sum( array) {
        let total = 0;
        for (let i = 0; i < array.length ; i++) {
            total += array[i]
        }
        return total
    }//end of sum

}//end  of HuffmanEncoding


module.exports = HuffmanEncoding



