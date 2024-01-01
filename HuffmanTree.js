// CLASS: HuffmanTree
//
// Author: Abdulaziz Yahaya
//
// REMARKS: manages a huffmanTree used in Huffman Encoding
//
//-----------------------------------------
let TreeNode = require("./TreeNode")

class HuffmanTree{

    constructor( character = null, weight) {
        this.character = character;
        this.root = new TreeNode( character);
        this.weight = weight;
    }//end of constructor

    combine( tree1, tree2){//combine the two given trees together

        let newTree = new HuffmanTree( null, tree1.getWeight + tree2.getWeight );


        newTree.setLeft = tree1;
        newTree.setRight = tree2;

        //for backtracking

        return newTree;
    }//end of combine


    set setLeft( lnode){
        this.root.setLeft = lnode
    }

    set setRight( rnode){
        this.root.setRight  = rnode
    }

    get getLeft(){
        return this.root.getLeft
    }

    get getRight(){
        return this.root.getRight
    }


    compareTo( tree){

        let threshold = Math.pow(10,-12)

        let diff = Math.abs( this.weight - tree.weight)

        if( this.weight < tree.getWeight){//if it comes before

            return 1;

        }else if( this.weight > tree.getWeight){//if it comes after
            return -1;

        }else {

            //get the characters in each tree
            let content1 = this.inorder( this.root);
            let content2 = this.inorder( tree);

            //get the smallest char from each tree
            let sc1 = this.getSmallestChar( content1)
            let sc2 = this.getSmallestChar( content2)


            if( sc1 < sc2){

                return 1;

            }else if( sc1 === sc2) {

                return 0;
            }else {
                return -1;
            }

        }

        return "Compare to did not work";
    }//end of compareTo



    inorder( root , ans){//traverses the tree in inorder(lnr)

        let curr = root//start from the root

        if( curr !== null && curr !== undefined){

            //go left
            if( curr.getLeft !== null){
                ans = this.inorder( curr.getLeft, ans);
            }

            //visit the node
            if( curr.getCharacter !== null){

                ans += curr.getCharacter
            }

            //go right
            if( curr.getRight !== null){
                ans = this.inorder( curr.getRight, ans);
            }

        }//end of big if

        return ans;
    }//end of inorder

    getSmallestChar( word){//returns the smallest character of a word

        let c = word[0]
        for (let i = 1; i < word.length ; i++) {

            if( word[i] < c){
                c = word[i]
            }
        }

        return c
    }//end of getSmallestChar

    get getWeight(){
        return this.weight
    }

    get getCharacter(){
        return this.root.getCharacter
    }

    get getRoot(){
        return this.root//treeNode
    }

}//end of class HuffmanTree

module.exports = HuffmanTree