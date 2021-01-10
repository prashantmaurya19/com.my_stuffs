const container = document.querySelectorAll('#container section');
const screen = document.querySelector('#dial');
const  body = document.querySelector('body');
const handle = document.querySelector("section");
const rotate = new dragRotate(handle);
// body.style = `$--totalDimension:${container[0].offsetHeight}px`;

body.addEventListener("dragover",(e)=>{
    e.preventDefault();
});

let audio = null;
let scount = 1;
let setted_alien = 0;
screen.addEventListener("click",change);

rotate.setDragEndCallback(ending);

function ending(){
    setted_alien = 0;
}

rotate.setDragCallback((angle)=>{
    if(screen.className=="Alien_screen"){
        angle = parseInt(angle);
        if(angle%36==0 && setted_alien!=angle){
            audio = new Audio(`./sound/change${scount}sound.ogg`);
            audio.play();
            setted_alien = angle;
            setTimeout(() => {
                change_alien_in_screen(setted_alien);
                scount++;
                if(scount==7){
                    scount = 1;
                }
            }, parseInt(audio.duration*1000));
        }
    }
});

function change_alien_in_screen(angle=0){
    screen.firstElementChild.style.backgroundImage = `url(./images/img${(angle/36)}.jpg)`;
}

function change(){
    if(this.className=="screen"){
        audio = new Audio("./sound/initSound.ogg");
        audio.play();
        screen.style.animationName = "opening";
        setTimeout(() => {
            this.className ="Alien_screen";
            screen.firstElementChild.style.cssText += "--i:1;";
            screen.style.animationName = "";
        }, 590);
        return;
    }else if(this.className=="Alien_screen"){
        this.className = "boom";
        this.style = "";
        audio = new Audio("./sound/transformSound.ogg");
        audio.play();
        screen.firstElementChild.style.cssText += "--i:0;";
        setTimeout(() => {
            this.className = "Active_Alien_screen";
            handle.style.cssText = `--color:white ; transform:${handle.style.transform};`;
        }, 1376);
    }else if(this.className=="Active_Alien_screen"){
        audio = new Audio("./sound/warningSound.ogg");
        audio.play();
        setTimeout(() => {
            this.className = "Alien_screen_Off";
            handle.style.cssText = `--color:red ; transform:${handle.style.transform};`;
        }, 4736);
    }else if(this.className=="Alien_screen_Off"){
        audio = new Audio("./sound/activeSound.ogg");
        audio.play();
        handle.style.cssText = `--color:greenyellow ; transform:${handle.style.transform};`;
        this.className ="screen";
    }
}

