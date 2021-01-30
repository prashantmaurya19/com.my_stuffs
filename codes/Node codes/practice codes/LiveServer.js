//Appna Live server
const http = require('http');
const fs = require("fs");
const path = require('path');
class LiveServer{
		constructor(folder){
			this.WebFiles = {
				html:new Array(),
				js:new Array(),
				css: new Array()
			}
			this.folder = folder.replace(/\\/g,"/");
			if(this.folder.slice(-1)=='/'){
				this.folder = this.folder.slice(0,-1);
			}
			this.fatchFiles(this,folder);
			this.modified = false;
			this.server = http.createServer((request,response)=>{
				switch(request.url){
					case "" : {
						response.end(this.getHtmlFile());
					};
					break;
					case "/" : {
						response.end(this.getHtmlFile());
					};
					break;
					case "/modified":{
						if(this.modified){
							response.end(`true`);
							this.modified = false;
						}
					}
					break;
					default: {
						try{
							response.end(fs.readFileSync(`${this.folder}${request.url}`));
						}catch(err){
							console.log(`File not exist ${request.url}`);
						}
					}
					break;
				}
			});
			this.io = require('socket.io')(this.server);
			this.io.on('connection', client => {
				console.log("a new user is connected..");
				this.id = setInterval(() => {
					if(this.checkModification()){
				  		this.io.emit('modified', `${this.modified}`);
					}
				}, 500);
				client.on('disconnect', () => { console.log("the user is disconnected"); });
			});
	}

	getHtmlFile(){
		let page = fs.readFileSync(this.WebFiles.html[0].name,"UTF-8");
		page = page.split("</body>");
		page = `${page[0]}

		<!-- code is inserted by LiveServer.js -->

	    <script src="/socket.io/socket.io.js"></script>
	    <script>
	        const newItem = (content) => {
	          const item = document.createElement('li');
	          item.innerText = content;
	          return item;
	        };

	        const socket = io();

	        socket.on('connect', () => {
	        	console.log("successfully connected to server ...")
	        });
	        socket.on('modified', (data) => {
			  location.reload();
			});
		</script>

		<!-- code is inserted by LiveServer.js -->
		</body>
		${page[1]}`;
		return page;
	}

	fatchFiles(obj,folder,innerFolder="/"){
		fs.readdir(folder,(err,files)=>{
				if(err){
					console.log(err);
			    }else{
					files.forEach((file)=>{
						let fullFileName = `${folder}\\${file}`;
						let info = path.parse(fullFileName);
						if(info.ext==".html" || info.ext==".css" || info.ext==".js"){
							obj.WebFiles[info.ext.slice(1,)].push({name:fullFileName,time:`${fs.statSync(fullFileName).mtime}`});
						}
					});
		    	}
		});
	}
	checkModification(){
		if(this.WebFiles["html"].map(this.checkMTime).includes(true)){
			return true;
		}else if(this.WebFiles["js"].map(this.checkMTime).includes(true)){
			return true;
		}else if(this.WebFiles["css"].map(this.checkMTime).includes(true)){
			return true;
		}else{
			return false;
		}
	}

	checkMTime(file){
		let mt = fs.statSync(file.name).mtime;
		if(file.time!=`${mt}`){
			file.time =  mt;
			return true;
		}
	}

	startServer(port){
		console.log(`
			server started listening at

			http://localhost:${port}
			`)
		this.server.listen(port);
	}

	stopChecking(){
		clearInterval(this.id);
	}

	stopServer(){
		this.stopChecking();
	}
}


module.exports = LiveServer;
