const fs = require("fs") //that how we import moduls

// fs.writeFileSync("prashant.txt",'prashant is very ambises') //this is also create file if that file is existses
// fs.writeFileSync("prashant.txt",'i am is very ambises') //this overried the data

// fs.appendFileSync('prashant.txt','\ni am very ambises') //this append the data

/*
Node.js includes an additional data type called Buffer
(nor available in browser's JavaScript).
Buffer is mainly used to store binary data,
while reading from a file or receiveing packets over the network.
*/


// const  data = fs.readFileSync('prashant.txt') //this is 
// by using toString() this binary data convert  to simple string (readable data by humans)
// console.log(data.toString());

// rename a file
fs.renameSync('prashant.txt','prashantmaurya.txt')





