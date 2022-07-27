const express = require('express');
const path = require('path');

class Roots{
    constructor(){
        this.r = express.Router();
    }

    addRoot(endPoint,func){
        this.r.get(endPoint,func.bind(this));
    }
}

let r = new Roots();
r.addRoot('/:name',(req,res)=>{
    // console.log(res);
    res.send(`hellow ${req.params.name} sir `);
});
r.addRoot('/greeting/',(req,res)=>{
    res.send(`welcome sir `);
});


module.exports = r.r;