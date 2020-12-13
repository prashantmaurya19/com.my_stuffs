console.log('this file is included');

function rotateElement(e,event){
    let width = e.clientWidth;
    let hight = e.clientHeight;
    let x = (e.getBoundingClientRect().left) +(width / 2);
    let y = (e.getBoundingClientRect().top) +(hight/ 2);
    let redian = Math.atan2(event.pageX - x,event.pageY - y);
    let rote = (redian *(180 / Math.PI)*-1) +180;
    if(!(e.getBoundingClientRect().left>150 && e.getBoundingClientRect().top>150)){
        e.style.transform = "rotate("+rote+"deg)";
    }
    console.log(e.getBoundingClientRect().left,e.getBoundingClientRect().top);
}

function rotate(e){
    rotateElement(document.querySelector('.container'),e);
}

document.querySelector('body').addEventListener('mousemove',rotate);