const http = require('http')




const server = http.createServer((request,response)=>{
    switch (request.url) {
        case '/':response.end('home page');
            
            break;
        case '/contact': response.end('contact page');
            break;
        case '/account' :response.end('account page');
            break;
        default: {
            //response.write(string) this also write string on page
            response.writeHead(404,{"Content-type":"text/html"});
            response.end('404 error \npage dose not exits ')
        }
            break;
    }
});


server.listen(8000,'127.0.0.1',()=>{    
    console.log('Started at port : 8000');
});