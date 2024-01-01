// CLASS: DictionaryTests
//
// Author: Abdulaziz Yahaya
//
// REMARKS: test suite for the Dictionary class
//
//-----------------------------------------

let assert = require("assert");
let Dictionary = require("./Dictionary");
let Node = require("./Node")
let IntHash = require("./IntHash")
let StringHash = require("./StringHash")

function testPut( dictionary, value) {//tests the put method

    //tests whether something has been inserted in the hashTable
    let d = new Dictionary(3);
    d.put( new IntHash(1),"abdul" );
    d.put( new IntHash(2),"inuwa" );
    d.put( new IntHash(3),"yahaya" );
    assert( d.size === 3)//size should be 3

    //after inserting to insert duplicate key, size should still be 3
    d.put( new IntHash(3),"yahaya" );
    assert( d.size === 3);//size should be 3

}//end of testPut


function testsGet() {//tests the get method
    let d = new Dictionary(3);
    let key1 = new IntHash(1);
    d.put( key1,"abdul" );
    d.put( new IntHash(2),"inuwa" );
    d.put( new IntHash(3),"yahaya" );
    //test 1 - getting a value that has not been changed
    assert( d.get( key1) === "abdul" );

    //test2 - getting a value that should have changed
    d.put( key1, "tomorrow");
    assert( d.get( key1) === "tomorrow" );


}//end of testsGet

function testContains(){//tests the contains method
    let d = new Dictionary(3);
    let key1 = new IntHash(1);
    d.put( key1,"abdul" );
    d.put( new IntHash(2),"inuwa" );
    d.put( new IntHash(3),"yahaya" );

    //test1 - looking for a key that exists
    assert( d.contains( key1) === true);

    //test2 - looking for a key that does not exist, should be false
    assert( d.contains( new StringHash("llll")) === false);

}//end of testContains

function main() {

    console.log("Test suite is running.....")
    testPut();
    testsGet();
    testContains();
    console.log("End of test suite.....")
}//end of main(test suite)

main()