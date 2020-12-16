class mergeTwoElement{
    constructor(element1,element2){
        this.element1 = element1;
        this.element2 = element2;
        this.element1.lines.push(this);
        this.element2.lines.push(this);
        this.distance = 0;
        this.angle = 0;
        this.midPoint = document.createElement("span");
        this.midPoint.setAttribute("class","midpoint");
        document.querySelector("body").appendChild(this.midPoint);
    }

    setColor(color){
        this.midPoint.style.background=color;
    }
    
    setWidth(width){
        this.midPoint.style.height = width;
    }

    currPoint(e){
        try {
            if(e.x!=0){
                e.target.coorx = (e.x-e.target.X)+(e.target.width/2);
                e.target.coory = (e.y-e.target.Y)+(e.target.height/2);
            }
        } catch (error) {
            console.log(error);
        }
        this.joinElement();
    }

    joinElement(){
        if(this.element1.coorx!=undefined && this.element2.coorx!=undefined){
            this.midPointx = parseInt((this.element2.coorx + this.element1.coorx)/2)-3;
            this.midPointy = parseInt((this.element2.coory + this.element1.coory)/2);
            this.distance = Math.sqrt(Math.pow(this.element2.coorx - this.element1.coorx,2)+Math.pow(this.element2.coory - this.element1.coory,2));
            this.midPoint.style.top = this.midPointy+'px';
            this.midPoint.style.left = (this.midPointx-parseInt(this.distance/2))+'px';
            this.midPoint.style.width = this.distance+"px";
            this.midPoint.style.cssText += " --i:"+(this.distance)+"px;";
            this.angle = (Math.atan2(this.element2.coory - this.element1.coory,this.element2.coorx - this.element1.coorx)/Math.PI)*180;
            this.midPoint.style.transform = `rotate(${this.angle}deg)`;
        }
    }
    
}



class MergeElements{
    constructor(head,elements,option = {
        "width" : "10px",
        "color" : "white",
        animation:false
    }){
        this.options = option;
        this.elements = elements;
        this.attchProperty(head);
        head.lines = new Array();
        elements.forEach(element => {
            element.lines = new Array();
            this.attchProperty(element);
            try {
                this.lines.push(new mergeTwoElement(head,element));
                
            } catch (error) {
                this.lines = new Array(new mergeTwoElement(head,element));
            }
            try {
                if(!option.animation){
                    this.lines[this.lines.length-1].setColor(option.color);
                }
                this.lines[this.lines.length-1].setWidth(option.width);
            } catch (error) {
                console.log(error);
            }
        });
        this.elements.push(head);
    }

    Current_Point(e){
        this.lines.forEach((line)=>{
            line.currPoint(e);
        });
    }

    getline(n){
        return this.lines[n];
    }

    attchProperty(element){
        element.addEventListener('dragstart',this.moveOn);
        element.addEventListener('dragend',this.moveOff);
        element.addEventListener('drag',this.Current_Point);
        element.setAttribute('draggable','true');
    }

    join(element1,element2){
        if(this.elements.includes(element1) && !this.elements.includes(element2)){
            this.attchProperty(element2);
            element2.lines = new Array();
            this.elements.push(element2);
            this.lines.push(new mergeTwoElement(element1,element2));
            this.lines[this.lines.length-1].setWidth(this.options.width);
            if(this.options.animation){
                return
            }
            this.lines[this.lines.length-1].setColor(this.options.color);
        }
    }

    moveOn(e){
        this.X = e.offsetX;
        this.Y = e.offsetY;
        if(this.width==undefined){
            this.width = this.offsetWidth;
            this.height = this.offsetHeight;
        }
        setTimeout(()=>{
            e.target.preClass = e.target.className;
            e.target.className = 'hide';
        },0)
    }

    setColor(line_Number,Color){
        if(this.options.animation){
            return
        }
        this.getline(line_Number).setColor(Color);
    }

    setColor(line_Number,width){
        this.getline(line_Number).setWidth(width);
    }

    moveOff(e){
        e.target.className = e.target.preClass;
        e.target.style.left = (e.clientX-this.X)+'px';
        e.target.style.top = (e.clientY-this.Y)+'px';
    }

}








