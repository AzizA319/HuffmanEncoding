//-----------------------------------------
//CLASS: Main
//
// REMARKS: Calculate the Huffman encoding of a file and write it out in an output file
//
//-----------------------------------------

let HuffmanEncoding = require("./HuffmanEncoding")

function main() {

    let hc = new HuffmanEncoding("test.txt");
    hc.encode()
}

main()



