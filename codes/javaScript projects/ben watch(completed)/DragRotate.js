class dragRotate{
    constructor(element){
        this.element = element;
        element.addEventListener("drag",this.move);
        element.addEventListener("dragstart",this.moveon);
        element.addEventListener("dragend",this.moveOff);
        element.setAttribute("draggable","true");
        element.addEventListener("touchstart",this.moveon);
        element.addEventListener("touchmove",this.move);
        element.addEventListener("touchend",this.moveOff);
        element.coory = element.offsetTop+(element.offsetHeight/2)
        element.coorx = element.offsetLeft+(element.offsetWidth/2)
        this.diff = 0;
        this.angle = 0; 
        element.style.transform = "rotate(0deg)";
        this.element.instance = this;
        this.DragCallback = function (){};
        this.DragStartCallback = function (){};
        this.DragEndCallback = function (){};
        this.state = true;
    }
    
    moveon(e){
        this.instance.diff = this.instance.toDegree(this.instance.findAngle(e)-this.instance.angle);
        this.instance.angle = this.instance.findAngle(e);
        this.instance.setAngle();
        this.instance.DragStartCallback(this.instance.toDegree(this.instance.angle-this.instance-this.diff));
        if(e.type=="dragstart"){
            e.dataTransfer.setDragImage(new Image(),0,0);
        }
    }
    
    toDegree(angle){
        if(angle<0){
            angle += 360;
        }
        return angle;
    }

    findAngle(e){
        // console.log(e.type)
        if(e.type=="touchend"){
            return this.angle;
        }
        if(e.y==undefined){
            let angle = (Math.atan2(e.touches[0].pageY-this.element.coory,e.touches[0].pageY-this.element.coorx)*180)/Math.PI;
            angle = this.toDegree(angle);
            return angle;
        }else{
            let angle = (Math.atan2(e.y-this.element.coory,e.x-this.element.coorx)*180)/Math.PI;
            angle = this.toDegree(angle);
            return angle;
        }
    }
    setAngle(){
        if(this.state){
            this.element.style.transform = `rotate(${this.toDegree(this.angle-this.diff)}deg)`;
        }
    }

    move(e){
        if(e.x!=0){
            this.instance.angle = this.instance.findAngle(e);
            this.instance.setAngle();
            this.instance.DragCallback(this.instance.toDegree(this.instance.angle));
        }
    }
    
    
    moveOff(e){
        this.instance.angle = this.instance.findAngle(e);
        this.instance.DragEndCallback(this.instance.angle);
        this.instance.setAngle();
        this.instance.angle = this.instance.toDegree(this.instance.angle-this.instance.diff);
    }
    
    setDragCallback(callback = function (){}){
        this.DragCallback = callback;
    }
    setDragStartCallback(callback = function (){}){
        this.DragStartCallback = callback;
    }
    setDragEndCallback(callback = function (){}){
        this.DragEndCallback = callback;
    }

    destroy(){
        this.element.removeEventListener("drag",this.move);
        this.element.removeEventListener("dragstart",this.moveon);
        this.element.removeEventListener("dragend",this.moveOff);
        this.element.setAttribute("draggable","false");
        delete this.element.coory;
        delete this.element.coorx;
        delete this;
    }

    status(bool = true){
        this.state = bool;
    }
}