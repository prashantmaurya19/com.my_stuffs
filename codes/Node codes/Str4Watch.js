// string converter for watchview
const prompt = require("prompt-sync")();
let data = prompt("Enter the String : ").replace(/\s/g,"_");
let page = [];

const len=129;
const len2=128;
for(let i = 0;i<data.length;i+=len2){
	page.push(data.substring(i,i+len2));
}
console.log(page);