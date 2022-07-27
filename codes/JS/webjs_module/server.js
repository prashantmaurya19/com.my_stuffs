const Server = require("./lib/Express_Server");
const LibLoader = require("C:/Users/prashant/Downloads/Stuff/codes/JS/node_module/LibLoader");
globalThis.lib = new LibLoader({
    fs:{
        requireType:"attribute",
        main:"fs"
    },
    path:{
        requireType:"attribute",
        main:"path"
    }
});
const expressServer = new Server(8800);

expressServer.route((express,port)=>{
    express.get("/lib=:libname",(req,res)=>{
        let filepath = globalThis.lib.path.resolve(__dirname,"lib",req.params.libname);
        if(globalThis.lib.fs.existsSync(filepath)){
            res.send(globalThis.lib.fs.readFileSync(filepath,"utf-8"));
        }else{
            console.log(`[Request for ${req.params.libname} is Cancelled : 404]`);
            res.send("404");
        }
    });
    express.get("/echo",(req,res)=>{
        console.time("[successfull echo : 200]");
        res.send(`actively running at port : http://localHost:${port}/`);
        console.timeEnd(`[successfull echo : 200]`);
    });
    express.get("/help",(req,res)=>{
        res.send(`
            options:
            /echo : for checking status of server
            /lib=html_lib_name : getting the file located ar C:/Users/prashant/Downloads/Stuff/codes/JS/webjs_module
        `);
    })
});

expressServer.listen();

