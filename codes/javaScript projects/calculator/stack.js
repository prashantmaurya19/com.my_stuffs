class Stack{
    constructor(){
        this.item = [];
    }
    stackByString(string){
        if(!this.isEmpty()){
            return 'stack is already declared.';
        }
        let arr = new Array();
        let reg = /[-+/()\^\*]|(\d+\.\d+)|(\d+)/g;
        this.item = string.match(reg).reverse();
    }
    push(element){
        this.item.push(element);
    }
    tostack(arr){
        if(this.isEmpty){
            this.item = arr;
        }else{
            return 'stack is already initialised';
        }
    }
    pop(){
        if(this.item.length == 0){
            return null;
        }
        return this.item.pop();
    }
    peek(){
        return this.item[this.item.length - 1];
    }
    isEmpty(){
        return this.item.length == 0;
    }
    frontPeek(){
        return this.item[0];
    }
    length(){
        return this.item.length;
    }
    Reverse(){
        this.item.reverse();
    }
    reverseBracket(){
        if(this.isEmpty()){
            return;
        }
        console.log('reverse is called');
        for(let i = 0;i<this.length();i++){
            switch (this.item[i]) {
                case ')': this.item[i] = '(';
                    break;
                case '(': this.item[i] = ')';
                    break;
            }
        }
    }
}


function checkPresidence(a,b){
    if((a=="+" || a=="-") && (b=="*" || b=="/")){
        return -1;
    }else if((a=="*" || a=="/") && (b=="+" || b=="-")){
        return 1;
    }else if((a=="+" || a=="-") && ((b=="+" || b=="-"))){
        return 0;
    }else if((a=="*" || a=="/") && (b=="*" || b=="/")){
        return 0;
    }
}


function prefix(stack){
    let result = new Stack();
    let ops = new Stack();
    while(!stack.isEmpty()){
        let reg = /(\d+\.\d+)|(\d+)/g;
        if(!isNaN(parseInt(stack.peek()))){
            result.push(stack.pop());
        }else if(ops.isEmpty() && stack.peek()!='('){
            ops.push(stack.pop());
        }else if(stack.peek()==')'){
            ops.push(stack.pop());
        }else if(stack.peek()=='('){
            stack.pop();
            while(ops.peek()!=')'){
                result.push(ops.pop());
            }
            ops.pop();
        }else if(checkPresidence(stack.peek(),ops.peek()) == -1){
            result.push(ops.pop());
        }else{
            ops.push(stack.pop());
        }
    }
    while(!ops.isEmpty()){
        result.push(ops.pop());
    }
    return result;
}

function prefixSolver(r){
    let result = new Stack();
    while(!r.isEmpty()){
        if(!isNaN(parseInt(r.peek()))){
            result.push(parseInt(r.pop()));
            continue;
        }
        switch (r.pop()) {
            case '+': result.push(parseInt(result.pop())+parseInt(result.pop()));
            break;
            case '-': result.push(parseInt(result.pop())-parseInt(result.pop()));
            break; 
            case '*': result.push(parseInt(result.pop())*parseInt(result.pop()));
            break;
            case '/': result.push(parseInt(result.pop())/parseInt(result.pop()));
            break;
        }
    }
    return result.pop();
}
/*
    1-9
    9-1
    value = 1           ops = 
    value = 1           ops = -
    value = 1 9           ops = -
    19-
    -91
    9-1
*/

function evaluate(a){
    let e  = new Stack();
    e.stackByString(a);
    e.reverseBracket();
    let r = prefix(e);
    r.Reverse();
    let result = prefixSolver(r);
    return result;
}

