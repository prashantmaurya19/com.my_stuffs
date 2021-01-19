class dragRotate{
    constructor(element){
        this.element = element;
        element.addEventListener("drag",this.move);
        element.addEventListener("dragstart",this.moveon);
        element.addEventListener("dragend",this.moveOff);
        element.setAttribute("draggable","true");
        this.diff = 0;
        this.angle = 0;
        element.style.transform = "rotate(0deg)";
        element.coory = element.offsetTop+(element.offsetHeight/2)
        element.coorx = element.offsetLeft+(element.offsetWidth/2)
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
        this.instance.DragStartCallback(e,this.instance.toDegree(this.instance.angle-this.instance.diff));
        e.dataTransfer.setDragImage(document.createElement("img"),0,0);
    }
    
    toDegree(angle){
        if(angle<0){
            angle += 360;
        }
        return angle;
    }

    findAngle(e){
        let angle = (Math.atan2(e.y-this.element.coory,e.x-this.element.coorx)*180)/Math.PI;
        angle = this.toDegree(angle);
        return angle;
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
            this.instance.DragCallback(e,this.instance.toDegree(this.instance.angle));
        }
    }
    
    
    moveOff(e){
        this.instance.angle = this.instance.findAngle(e);
        this.instance.setAngle();
        this.instance.angle = this.instance.toDegree(this.instance.angle-this.instance.diff);
        this.instance.DragEndCallback(e,this.instance.toDegree(this.instance.angle));
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
}