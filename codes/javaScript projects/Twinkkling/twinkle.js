let body = document.querySelector('body');
// body.style.height = innerHeight+"px";

let interval = [];

for(let i = 1;i<2;i++){
    interval[i] = setInterval(() => {
        let rangeX = Math.floor(Math.random()*(innerWidth));
            let rangeY = Math.floor(Math.random()*(innerHeight));
            createStar(rangeX,rangeY);
    },1000*(i-1));
}

for(let i =0;i<3;i++){
    // clearInterval(interval[i]);
}


function createStar(x,y){
    let star = document.createElement('span');
    star.setAttribute('class','star');
    star.style.top = y+'px';
    star.style.left = x+'px';
    body.appendChild(star);
    setTimeout(()=>{
        body.removeChild(star);
    },1000);
}