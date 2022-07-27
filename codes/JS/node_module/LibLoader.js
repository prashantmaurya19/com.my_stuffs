class LibLoader{
    constructor(obj){
        for(let i in obj){
            if(i=="requireType"){
                continue;
            }
            if(this[i]==undefined){
                if(obj[i].requireType=="attribute"){
                    this[i] = require(""+obj[i].main);
                }else if(obj[i].requireType=="functional"){
                    this[i] = require(""+obj[i].main)();
                }
                for(let j in obj[i].sub){
                    if(j=="requireType"){
                        continue;
                    }
                    if(obj[i].sub["requireType"]=="attribute"){
                        this[j] = this[i][obj[i].sub[j]];
                    }else if(obj[i].sub["requireType"]=="functional"){
                        this[j] = this[i][obj[i].sub[j]]();
                    }
                }
            }else {
                for(let j in obj[i].sub){
                    if(this[obj[i].sub[j]]==undefined){
                        if(obj[i].sub["requireType"]=="attribute"){
                            this[j] = this[i][obj[i].sub[j]];
                        }else if(obj[i].sub["requireType"]=="functional"){
                            this[j] = this[i][obj[i].sub[j]]();
                        }
                    }
                }
            }
        }
    }
}

module.exports = LibLoader;