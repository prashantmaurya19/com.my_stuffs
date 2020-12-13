
const fs = require('fs');
const { exit } = require('process');
const path = require("path");
const regex = /#\d+/;

const folder = "C:\\Users\\prashant\\Downloads\\Node js notes\\practice codes\\Connecting to Mongo";
console.log(folder);
fs.readdir(folder,(err,files)=>{
    if(err){
        console.log(err);
    }else{
        files.forEach((file)=>{
            let a  = regex.exec(file)
            if(a!=null){
                
                fs.renameSync(`${folder}/${file}`,`${folder}/${a[0]+file.replace(/#\d+\s+/," ")}`);

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