const watch = document.getElementById('ben');
const screen = document.querySelector('#dial');
const  body = document.querySelector('body');
const handle = document.querySelector("section");
const nodes = handle.children;
let audio = new Audio("./sound/initSound.ogg");
let scount = 1;
let currNumber = 0;

let rotate = new dragRotate(handle);

screen.addEventListener("click",change);

rotate.setDragCallback(cal);

function cal(angle){
    if(screen.className=="Alien_screen"){
        if(parseInt(angle)%60==0){
            audio = new Audio(`./sound/change${scount}sound.ogg`);
            audio.play();
            setTimeout(() => {
                next_alien();
                scount++;
                if(scount==7){
                    scount = 1;
                }
            }, parseInt(audio.duration*1000));
        }
    }
}

function next_alien(){
    currNumber++;
    screen.style.background = `url(./images/${currNumber}.jpg) 0% 0% / cover`;
    if(currNumber==32){
        currNumber = 0;
    }
}

function change(){
    if(this.className=="screen"){
        audio.play();
        this.className ="Alien_screen";
        return;
    }else if(this.className=="Alien_screen"){
        this.className = "boom";
        this.style = "";
        audio = new Audio("./sound/transformSound.ogg");
        audio.play();
        setTimeout(() => {
            this.className = "Active_Alien_screen";
            handle.style = "--color:white";
        }, 1376);
    }else if(this.className=="Active_Alien_screen"){
        audio = new Audio("./sound/warningSound.ogg");
        audio.play();
        setTimeout(() => {
            this.className = "Alien_screen_Off";
            handle.style = "--color:red";
        }, 4736);
    }else if(this.className=="Alien_screen_Off"){
        audio = new Audio("./sound/activeSound.ogg");
        audio.play();
        handle.style = "--color:greenyellow";
        this.className ="screen";
    }
}




