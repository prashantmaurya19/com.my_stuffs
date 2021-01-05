const fs = require('fs');
const path = require("path");
const prompt = require('prompt-sync')();
const chalk = require('chalk');
const folder = prompt(chalk.red("Enter Path : "));
const keyword = prompt(chalk.red("Enter Starting_Keyword : "));
fs.readdir(folder,(err,files)=>{
    if(err){
		console.log(chalk.red("Location Not found!!!"));
		return;
    }else{
		console.log(chalk.green("Location found!!!"));
		let i = 10;
		files.forEach((alien)=>{
			fs.renameSync(`${folder}\\${alien}`,`${folder}\\${keyword}${i}.jpg`);
			i--;
		});
		console.log(chalk.green("Renaming is Completed"));
    }
});