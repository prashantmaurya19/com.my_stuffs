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
        this.setMidCoor(element1);
        this.setMidCoor(element2);
        this.joinElement();
    }

    setMidCoor(element){
        element.coorx = element.offsetLeft + (element.offsetWidth/2);
        element.coory = element.offsetTop + (element.offsetHeight/2);
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

    removeElements(element,flag=0){
        if(flag==0){
            delete element.coorx;
            delete element.coory;
            delete element.X;
            delete element.Y;
            delete element.width;
            delete element.height;
            element.setAttribute('draggable','false');
        }
        this.midPoint.remove();
        try {
            if(element==this.element1){
                delete this.element2.lines[this.element2.lines.indexOf(this)];
            }else{
                delete this.element1.lines[this.element1.lines.indexOf(this)];
            }
        } catch (error) {
            console.log(error);
        }
        return this;
    }

    destory(){
        this.removeElements(this.element1,1);
        this.removeElements(this.element2,1);
        return this;
    }
    
}



class MergeElements{

    constructor(head,elements,option = {
        "width" : "10px",
        "color" : "white",
        animation:false
    }){
        
        if(elements!=null){
            this.attchProperty(head);
            head.lines = new Array();
            this.options = option;
            this.elements = elements;
            this.lines = new Array();
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
        }else if(head!=null){
            this.attchProperty(head);
            head.lines = new Array();
            this.elements = new Array(head);
            this.lines = new Array();
            this.options = option;
        }else{
            this.elements = new Array();
            this.lines = new Array();
            return;
        }
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
            this.elements.push(element2);
            element2.lines = new Array();
            this.addByjoin(element1,element2);
        }else if(this.elements.includes(element1) && this.elements.includes(element2)){
            this.addByjoin(element1,element2);
        }
    }

    addByjoin(element1,element2){
        this.lines.push(new mergeTwoElement(element1,element2));
        this.lines[this.lines.length-1].setWidth(this.options.width);
        if(this.options.animation){
            return
        }
        this.lines[this.lines.length-1].setColor(this.options.color);
    }

    moveOn(e){
        e.dataTransfer.setDragImage(this,this.offsetWidth/2,this.offsetHeight/2);
        this.X = e.offsetX;
        this.Y = e.offsetY;
        if(this.width==undefined){
            this.width = this.offsetWidth;
            this.height = this.offsetHeight;
        }
        setTimeout(()=>{
         e.target.style.display = "none";
        },0);
    }

    setColor(Color){
        if(this.options.animation){
            return
        }
        this.lines.forEach((line)=>{
            line.setColor(Color);
        });
    }

    setWidth(width){
        this.lines.forEach((line)=>{
            line.setWidth(width);
        });
    }

    moveOff(e){
        e.target.style.display = "flex";
        e.target.style.left = (e.clientX-this.X)+'px';
        e.target.style.top = (e.clientY-this.Y)+'px';
    }

    remove(element){
        element.removeEventListener('dragstart',this.moveOn);
        element.removeEventListener('dragend',this.moveOff);
        element.removeEventListener('drag',this.Current_Point);
        element.lines.forEach((line)=>{
            delete line.removeElements(element,0);
        });
        delete element.lines;
        delete this.elements[this.elements.indexOf(element)];
    }
    completeDelete(element1){
        element1.lines.forEach((line)=>{
            delete line.destory();
        });
        delete element1.lines;
    }

    disJoin(element1,element2){
        element1.lines.forEach((line)=>{
            element2.lines.forEach((line2)=>{
                if(line==line2){
                    this.check = true;
                    delete line.destory();
                    return;
                }
            });
            if(this.check){
                return;
            }
        });
        delete this.check;
    }
}








