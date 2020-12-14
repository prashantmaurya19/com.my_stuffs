// Node.js web Server

/*
To acces web pages of any web application ,
you need a web server.The web server will handle
requests for the web application

eg. IIS is a web server for ASP.NET web application and Apache is a web
server fo PHP of java Web application

Node.js provides capabilities to create your
own web server which will handle HTTP
requests asynchrosly .You can use IIS or Apache
to run Node.js web application
but it is recommended to use Node.js web server



*/
const http = require('http');

//Now we creating a server by http.createServer() method this also take an callback
const server = http.createServer((request,response)=>{ 
    /*
    In this we have two objects request and response 
    
    The request object can be used to get information about
    the current HTTP request eg. url,request header, and data

    The reponse object can be used to send a responce for a 
    current HTTP request

    If the response from the HTTP server is supposed to be
    displayed as HTML, you should include and HTTP header with the correct context type

    */
    const fs = require('fs')
    response.end(fs.readFileSync("C:/Users/prashant/Downloads/javaScript projects/BeyShop/BeyShop.html").toString()); //this nuccessary to response for any request to the user
    
})



server.listen(8000,'127.0.0.1',()=>{
    console.log('Started at no. :8000');
});

// console.log(http.METHODS) return list of all method in http module




