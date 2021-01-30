// const http = require('http');
// const fs = require("fs");
// const path = require('path');
const prompt = require("prompt-sync")();
const LiveServer = require("./LiveServer")

let folder = prompt("Enter the Path : ");


let live = new LiveServer(folder);

live.startServer(8000); 




