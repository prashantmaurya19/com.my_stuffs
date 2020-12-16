let watch = document.getElementById('ben');
let screen = document.querySelector('.screen');
let body = document.querySelector('body');
const width =screen.offsetWidth; 
const height =screen.offsetHeight;

screen.addEventListener("drag",move);
screen.addEventListener("dragstart",moveon);
// (e.x-this.X)+(this.width/2)

function moveon(e){
    this.X = e.offsetX;
    this.Y = e.offsetY;
}

function move(e){
    this.X = e.offsetX;
    this.Y = e.offsetY;
    console.log("draging")
    let angle = (Math.atan2(e.y-((e.y-this.Y)+(width/2)),e.x-(e.x-this.X)+(height/2))/Math.PI)*180;
    screen.style.transform = `rotate(${angle}deg)`;
}




