console.log('this is attached');
const clock = document.querySelector(".clock")
const start = document.querySelector(".start")
const sto = document.querySelector(".stop")
const title = document.querySelector("title");

console.log(window.onblur)

let min = 0;
let s = 0;

let id = "";

start.addEventListener('click',()=>{
    id = setInterval(timeing, 1000);
});

sto.addEventListener('click',()=>{
    clock.innerText = "00:00";
    title.innerText = "Timer - 00:00";
    console.log(id);
    clearInterval(id);
});

function timeing(){
    if(s==60){
        min++;
        s = 0;
    }
    s++;
    time = "";
    if(min<10){
        time += "0"+min+":";
    }else{
        time += min;
    }
    if(s<10){
        time += "0"+s;
    }else{
        time += min;
    }
    clock.innerText = time;
    title.innerText = "Timer - "+time;
}




