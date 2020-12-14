/*
Streams are objects that let read data from a source
or write data to a destination in continuous fashion.
In node.js there are four types of streams

Streaming means listening to music or watching video in 'real time'
,instead of downloading a file to your computer and watching it later

Readable - Stream which is used for read operation

Writeable - Sream which is used for write operation.

Duplex - Stream which can used both read and write operation

Transform - A type of duplex stream where the output is computed
based on input 


Each type of EventEmitter instance and throws several events at
different insttance of times. 

data - This enent is fired when is data is available to read

end - This enent is fired when there is no more data to read

error - This enent is fired when there is any error receving or writing data

finish -  This enent is fired when  all the data has been flused to underlying system

*/
const http = require('http')

const server = http.createServer();

server.on('request',(request,response)=>{
    // fs.readFile('prashant.txt',(error,data)=>{
    //     if (error) return console.log(error);
    //     response.end(data);
    // });
    const fs = require('fs');
    const rstream = fs.createReadStream('prashant.txt')
    rstream.on('data',(chunk)=>{
        response.write(chunk);
    });

    rstream.on('end',()=>{
        response.end();
    });
});

server.listen(8000,'127.0.0.1');










