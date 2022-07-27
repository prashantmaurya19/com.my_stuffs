class Server{
    constructor(port){
        this.express=require('express');
        this.port = port;
        this.app = this.express();
    }

    route(fun){
        fun(this.app,this.port);
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log("listening at " + this.port);
        });
    }
}

module.exports = Server;