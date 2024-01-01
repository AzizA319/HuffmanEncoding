// CLASS: TreeNode
//
// Author: Abdulaziz Yahaya, 7852294
//
// REMARKS: manages nodes of a HuffmanTree
//
//-----------------------------------------

class TreeNode{

    constructor( character = null, left = null,right = null) {

        this.character = character;
        this.left = left;
        this.right = right;

    }//end of treeNode constructor


    get getLeft(){
        return this.left
    }

    get getRight(){
        return this.right
    }

    set setLeft( l){
        this.left = l
    }

    set setRight(r){
        this.right = r
    }

    get getCharacter(){
        return this.character
    }

}//end of treeNode

module.exports = TreeNode