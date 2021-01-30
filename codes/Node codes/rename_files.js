const fs = require('fs');
const path = require("path");
const prompt = require('prompt-sync')();
const chalk = require('chalk');
const folder = prompt(chalk.red("Enter Path : "));
let regex_string = prompt(chalk.red("Enter regex : ")).split(" ");
let regex = regex_string[0];
let ignore = regex_string[1];
try{
	regex = new RegExp(regex,"g");	
	if(ignore!=undefined && ignore!=""){
		ignore = new RegExp(ignore,"g");
	}
	console.log(chalk.green("Regex accepted"));
}catch(err){
	console.log(chalk.red("Regex Failed to Complile"));	
}
let found = new Array();
fs.readdir(folder,(err,files)=>{
    if(err){
		console.log(chalk.red("Location Not found!!!"));
		return;
    }else{
		console.log(chalk.green("Location found!!!"));
        files.forEach((file)=>{
				let a  = file.match(regex);
				if(ignore!=undefined && ignore!="" && ignore.test(file)){
					fs.renameSync(`${folder}\\${file}`,`C:\\Users\\prashant\\Downloads\\dump\\${file}`);
				}else if(a!=null){
					let title = a.splice(-1)[0];
					a  = file.match(regex);
					if(!found.includes(`${folder}\\${title+file.replace(a[0],"")}`)){
							found.push(`${folder}\\${title+file.replace(a[0],"")}`);
							console.log(chalk.yellow(`${folder}\\${file}`));
							target = file;
							file = file.replace(regex,"");
							file = file.replace(/[_]+|\s+/g," ");								
							fs.renameSync(`${folder}\\${target}`,`${folder}\\${title} ${file}`);
							console.log(chalk.green(`${folder}\\${title} ${file}`));
						}else{
							console.log(chalk.blue(`File already exist : ${folder}\\${file}`));
						}
				}else{
					console.log(file);
				}
        });
    }
});
function move(oldPath, newPath, callback) {

    fs.rename(oldPath, newPath, function (err) {
        if (err) {
            if (err.code === 'EXDEV') {
                copy();
            } else {
                callback(err);
            }
            return;
        }
        callback();
    })
};

function copy(oldPath,newPath,callback=()=>{}) {
    var readStream = fs.createReadStream(oldPath);
    var writeStream = fs.createWriteStream(newPath);

    readStream.on('error', callback);
    writeStream.on('error', callback);

    readStream.on('close', function () {
        fs.unlink(oldPath, callback);
    });

    readStream.pipe(writeStream);
}