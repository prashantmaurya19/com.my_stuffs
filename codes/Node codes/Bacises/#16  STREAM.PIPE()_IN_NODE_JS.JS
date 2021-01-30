const http = require('http')

const server = http.createServer();

server.on('request',(request,response)=>{
    // fs.readFile('prashant.txt',(error,data)=>{
    //     if (error) return console.log(error);
    //     response.end(data);
    // });
        
    const fs = require('fs');
    // const rstream = fs.createReadStream('prashant.txt')
    // rstream.on('data',(chunk)=>{
    //     response.write(chunk);
    // });
    
    // rstream.on('end',()=>{
    //     response.end();
    // });

    const rstream = fs.createReadStream('prashant.txt')
    rstream.pipe(response);
});

server.listen(8000,'127.0.0.1');