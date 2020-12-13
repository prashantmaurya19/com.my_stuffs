 console.log('everything is all right');
let watch = document.getElementById('ben');
localStorage.setItem('current_state', '1');
let screen = document.getElementById('dial');
screen.style.backgroundPosition = '-9px -5px';
screen.style.backgroundSize = '539%';
let screen_Position = screen.style.backgroundPosition;
console.log(screen_Position);
let body = document.querySelector('body');
body.addEventListener('keypress',(e)=>{
    if(e.key=='z'){
        Arrowleft();
    }else if(e.key=='x'){
        Arrowright();
    }
})
console.log(body) 
screen.addEventListener('click', (element) => {
    screen_Position = screen.style.backgroundPosition;
    console.log(screen_Position);
    if (screen_Position == '-9px -5px') {
        screen.style.background = "url(./images/1.jpg)";
        localStorage.setItem('current_state', '1');
        screen.style.backgroundSize = "97%";
        screen.style.backgroundPosition = "center";
    } else if (screen.style.backgroundPosition=='-826px -268px') {
        screen.style.backgroundPosition = '-9px -5px';
        screen.style.boxShadow = '0 0 11px 2px rgb(115, 255, 0) inset';
    } else if (screen.style.backgroundPosition == "-1097px -532px"){
        screen.style.backgroundPosition = '-826px -268px';
        screen.style.boxShadow = '0 0 11px 2px rgb(255, 0, 0) inset';
    } else {
        let span = document.createElement('a');
        span.className = "ripple";
        span.id = "ripple";
        screen.appendChild(span);
        setTimeout(()=>{
            screen.removeChild(span);
        },1000);
        screen.style.background = 'url(./images/core.png) center center / 539%';
        screen.style.backgroundPosition = "-1097px -532px";
    }
    
});

function Arrowleft(){
    screen_Position = screen.style.backgroundPosition;
    let state = parseInt(localStorage.getItem('current_state'));
    if (state == 0 && screen_Position !='-9px -5px' && screen.style.backgroundPosition != "-1097px -532px" && screen_Position!='-826px -268px') {
        screen.style.background = "url(./images/39.jpg)";
        localStorage.setItem('current_state', '39');
        screen.style.backgroundSize = "97%";
        screen.style.backgroundPosition = "center";
    }else if(screen_Position !='-9px -5px' && screen.style.backgroundPosition != "-1097px -532px" && screen_Position!='-826px -268px'){
        state--;
        localStorage.setItem('current_state', state);
        screen.style.background = "url(./images/" + state + ".jpg)";
        screen.style.backgroundSize = "97%";
        screen.style.backgroundPosition = "center";
    }
}

function Arrowright(){
    screen_Position = screen.style.backgroundPosition;
    let state = parseInt(localStorage.getItem('current_state'));
    if (state == 39 && screen_Position !='-9px -5px' && screen_Position!='-826px -268px'  && screen.style.backgroundPosition != "-1097px -532px") {
        screen.style.background = "url(./images/1.jpg)";
        localStorage.setItem('current_state', '1');
        screen.style.backgroundSize = "97%";
        screen.style.backgroundPosition = "center";
    }else if(screen_Position !='-9px -5px' && screen_Position!='-826px -268px'  && screen.style.backgroundPosition != "-1097px -532px"){
        state++;
        localStorage.setItem('current_state', state);
        screen.style.background = "url(./images/" + state + ".jpg)";
        screen.style.backgroundSize = "97%";
        screen.style.backgroundPosition = "center";
    }
}
