console.log('this is a watch');
const minuteHandle = document.getElementById('minute');
const hourHandle = document.getElementById('hour');
const secondHandle = document.getElementById('second');
const degree = 540;
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let date = new Date();

update();

setInterval(() => {
    update();
}, 1000);

function update(){
    date = new Date();
    let hour = date.getHours();
    if(hour>12){
        hour = (hour-12)*30;
    }else{
        hour = hour*30;
    }
    let minute = (date.getMinutes()*6);
    let second = (date.getSeconds()*6);
    hourHandle.style.transform = `rotate(${hour}deg)`;
    minuteHandle.style.transform = `rotate(${minute}deg)`;
    secondHandle.style.transform = `rotate(${second}deg)`;
}

