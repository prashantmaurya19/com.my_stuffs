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
	items = {
		"/BeyShop.css":fs.readFileSync("C:/Users/prashant/Downloads/javaScript projects/BeyShop/BeyShop.css","UTF-8"),
		"/BeyShop.js":fs.readFileSync("C:/Users/prashant/Downloads/javaScript projects/BeyShop/BeyShop.js","UTF-8"),
		"":fs.readFileSync("C:/Users/prashant/Downloads/javaScript projects/BeyShop/BeyShop.html","UTF-8"),
		"/":fs.readFileSync("C:/Users/prashant/Downloads/javaScript projects/BeyShop/BeyShop.html","UTF-8"),
		"/Bushin_Ashura_1__84895.1557692563.jpg":fs.readFileSync("C:/Users/prashant/Downloads/javaScript projects/BeyShop/Bushin_Ashura_1__84895.1557692563.jpg"),
		"/Di_hf-0.jpg":fs.readFileSync("C:/Users/prashant/Downloads/javaScript projects/BeyShop/Di_hf-0.jpg"),
		"/kisspng-beyblade-spinning-tops-television-film-toy-tomy-burst-the-whole-stadium-5af23043e5c2c5.6677302615258215079411.png":fs.readFileSync("C:/Users/prashant/Downloads/javaScript projects/BeyShop/kisspng-beyblade-spinning-tops-television-film-toy-tomy-burst-the-whole-stadium-5af23043e5c2c5.6677302615258215079411.png"),
		"/6f750b9b0d0ed235f2ea07f597f09ef9.jpg":fs.readFileSync("C:/Users/prashant/Downloads/javaScript projects/BeyShop/6f750b9b0d0ed235f2ea07f597f09ef9.jpg"),
		"/kisspng-digital-art-beyblade-deviantart-fan-art-bay-blade-5b21ec7aa9ca84.7910663715289498826955.png":fs.readFileSync("C:/Users/prashant/Downloads/javaScript projects/BeyShop/kisspng-digital-art-beyblade-deviantart-fan-art-bay-blade-5b21ec7aa9ca84.7910663715289498826955.png"),
		"/s_l1600_18__22468.1448214507.jpg":fs.readFileSync("C:/Users/prashant/Downloads/javaScript projects/BeyShop/s_l1600_18__22468.1448214507.jpg"),
		
	}
    response.end(items[request.url]); //this nuccessary to response for any request to the user
 
})



server.listen(8000,'127.0.0.1',()=>{
    console.log('Started at no. :8000');
});

// console.log(http.METHODS) return list of all method in http module




