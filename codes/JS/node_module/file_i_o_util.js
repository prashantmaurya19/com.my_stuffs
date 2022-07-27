const fs = require("fs");

module.exports = {
    async read(path,format="utf-8"){
        return await fs.readFile(path,format);
    },
    readSync(path,format="utf-8"){
        return fs.readFileSync(path,format);
    },
    readJsonSync(path,format="utf-8"){
        return JSON.parse(this.readSync(path,format));
    },
    writeSync(path,str){
        fs.writeFileSync(path,str);
    },
    writeJson(path,obj){
        this.writeSync(path,JSON.stringify(obj));
    },
    exists(path){
        return fs.existsSync(path);
    },
    createFolder(path){
        fs.mkdirSync(path,{recursive:true});
    }
}