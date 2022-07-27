const express = require('express');

class Upper{
    constructor(port){
        this.port = port;
        this.app = express();
        this.requireRoots();
    }

    requireRoots(){
        this.app.use('/',require('./routes/pipelines'));
    }

    start(){
        this.app.listen(this.port,()=>{
            console.log(`im listening at http://localhost:${this.port}/`);
        })
    }
}

let a  = new Upper(3000);
a.start();