//Appna Live server

const fs = require("fs");

fs.watch(
	"./test.js",
	(e,filename)=>{
		console.log(e,filename);
	}
);


setInterval(()=>{
	fs.writeFileSync("./test.js",`const prompt = require('prompt-sync')();
const chalk = require('chalk');
let regex_string = "jfjfjf ".split(" ");
let regex = regex_string[0];
console.log("prahsant_rlpashant |prashant__ jsldm".match(/[_]+|\s+/g," "))
// console.log(regex,ignore);`);
},6000);

