class BlanceTaker{
    constructor(){
        return this.combineElement();
    }

    combineElement(){
        let element=document.createElement("span");
        element.append(this.createElement("Enter bank name"));
        element.appendChild(document.createTextNode(" : "));
        element.append(this.createElement("Enter amount"));
        return element;
    }
    
    createElement(text){
        let element = document.createElement("span");
        element.innerText=text
        element.classList.add("btaker")
        element.addEventListener("click",this.onclick);
        return element;
    }

    onclick(e){
        let input = document.createElement("input");
        input.setAttribute("type","text");
        input.classList.add("InputBalanceTaker");
        input.addEventListener("blur",(e)=>{
            e.target.parentElement.innerHTML = e.target.value;
            e.target.remove(); 
        });
        e.target.append(input);
        input.focus();
    }
}

class CreateBlanceTaker{
    constructor(element){
        let addBtn = document.createElement("button");
        addbtnc
        element.append(new BlanceTaker());
    }
}

let a = new CreateBlanceTaker(document.getElementById("containBalanceElement"));