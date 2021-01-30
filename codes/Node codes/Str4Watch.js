// string converter for watchview
const prompt = require("prompt-sync")();
const charactreInOneLine = 18; 
let data = prompt("Enter the String : ").replace(/\s/g,"_");
let result = "";
let line_count = 0;
let page = [];
for(let i = 0;i<=(data.length-data.length%charactreInOneLine);i+=charactreInOneLine){
	if(line_count==6){
		page.push(result);
		result = ""
		line_count = 0;
	}
	if(i+charactreInOneLine<=(data.length-1)){
		result += data.substring(i,i+charactreInOneLine)+" ";
	}else{
		result += data.substring(i,data.length-1);
	}
	line_count++;
}
