console.log('this is attched')
let speed = document.querySelector('#Bladespeed');
const blade = document.querySelector('.luncher');
let currimg;
speed.addEventListener("change",(e)=>{
    blade.style.animationDuration = Math.abs(e.target.value-1000)+'ms';
})
blade.addEventListener('dragover',(e)=>{
    e.preventDefault();
})

blade.addEventListener('drop',(e)=>{
    blade.style.backgroundImage = currimg;
    console.log(currimg);
})

let imgs = document.querySelectorAll('.carate img');
imgs.forEach(element => {
    element.addEventListener('dragstart',dragStart);
});

function dragStart(e){
    currimg = "url("+e.target.src+")";
}

function dragEnd(e){
    currimg = "";
}

document.querySelector("body").addEventListener('keydown',(e)=>{
    if(e.key=="ArrowLeft"){
        speed.value -= 50;
    }
    if(e.key=="ArrowRight"){
        speed.value += 10;
    }
    blade.style.animationDuration = Math.abs(speed.value-1000)+'ms'
    console.log(speed.value);
});