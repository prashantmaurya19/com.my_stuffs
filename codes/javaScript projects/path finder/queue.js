class Queue{
    constructor(){
        this.mainArr = new Array();
    }

    push(element){
        this.mainArr.push(element);
    }

    pop(){
        let element;
        if(this.mainArr.length!=1){
            element = this.mainArr[0];
            this.mainArr = this.mainArr.splice(1,);
        }else if(this.mainArr.length==0){
            return -1;
        }else{
            return this.mainArr.pop();
        }
        return element;
    }

    isEmpty(){
        return this.mainArr.length==0;
    }
}


