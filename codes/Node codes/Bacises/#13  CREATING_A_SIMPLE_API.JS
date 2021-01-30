const http = require('http');


const server = http.createServer((request,response)=>{
    /*
    Retriving data from database and
    send it to the user that the API 
    do it can be text and or in other 
    format.
    */

    // we can use control statement 
    // to add some functionality 
    response.end("ok"); //sending data
});


server.listen(8000,'127.0.0.1',()=>{
    console.log('server online at port 8000');
});



