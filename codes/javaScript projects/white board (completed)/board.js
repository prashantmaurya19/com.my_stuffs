let input = null; 
let body = document.querySelector('body');

const board = document.querySelector('.container');

const innerboard = board.children[0];

let  selected_Element = new Array();

innerboard.children[0].addEventListener("click",editText);

const contoller = new MergeElements(innerboard.children[0],[],option={width:"20px",animation:true});

board.addEventListener('drop',(e)=>{
    e.preventDefault();
});


function createnode(e){
    let node = document.createElement('span');
    node.setAttribute('class','node');
    node.addEventListener('click',editText);
    board.appendChild(node);
    contoller.join(e,node);
}


function editText(e){
    if(e.ctrlKey && e.shiftKey){
        selected_Element.push(this);
        if(selected_Element.length==2){
            contoller.disJoin(selected_Element[0],selected_Element[1]);
            selected_Element = new Array();
        }else if(selected_Element.length>2){
            selected_Element = new Array();
        }
        return;
    }else if(e.shiftKey){
        selected_Element.push(this);
        if(selected_Element.length==2){
            contoller.join(selected_Element[0],selected_Element[1]);
            selected_Element = new Array();
        }else if(selected_Element.length>2){
            selected_Element = new Array();
        }
        return;
    }else if(e.altKey){
        createnode(this);
        return;
    }else if(e.ctrlKey){
        if(e.target.id != "head"){
            let head = null;
            e.target.lines.forEach(line => {
                if(line.element2==this){
                    head = line.element1;
                }else{
                    contoller.join(head,line.element2);
                }
            });
            contoller.remove(e.target);
            e.target.remove();
        }
        return;
    }
    if(input!=null){
        return;
    }
    input = document.createElement("input");
    selected_Element = e.target;
    input.setAttribute("type","text");
    input.setAttribute("focus","true");
    input.setAttribute("value",e.target.innerText);
    input.addEventListener("keydown",placeText);
    input.addEventListener("blur",placeText);
    input.focus();
    e.target.innerHTML = "";
    e.target.appendChild(input);
    if(selected_Element.length!=0){
        selected_Element = new Array();
    }
}

function placeText(e){
        if(e.key=="Enter" || e.type=="blur"){
            e.target.parentNode.innerText = e.target.value;
            e.target.remove();
            input = null;
        }
}






