let body = document.querySelector('body');
// body.style.height = innerHeight+"px";
console.log('this is included');

for(let i = 1;i<3;i++){
    setInterval(() => {
        let rangeX = Math.floor(Math.random()*(innerWidth));
            let rangeY = Math.floor(Math.random()*(innerHeight));
            createStar(rangeX,rangeY);
    },500*(i-1));
}


function createStar(x,y){
    let star = document.createElement('span');
    star.setAttribute('class','star');
    star.style.top = y+'px';
    star.style.left = x+'px';
    body.appendChild(star);
    setTimeout(()=>{
        body.removeChild(star);
    },500);
}