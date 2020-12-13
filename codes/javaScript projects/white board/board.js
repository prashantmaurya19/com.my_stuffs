console.log('this is board'); 
let body = document.querySelector('body');
body.style.height = innerHeight+"px";
const board = document.querySelector('.container');
let newnode = document.getElementById('newnode');
newnode.addEventListener('click',createnode);

let deletnode = document.getElementById('deletnode');
deletnode.addEventListener('click',deleteNode);

function deleteNode(e){
    let name = prompt('name of deleting node');
    let chils = document.querySelectorAll('.node');
    chils.forEach(element => {
        console.log(element.innerText,name.toUpperCase(),name.toUpperCase()==element.innerText);
        if(name.toUpperCase()==element.innerText){
            board.removeChild(element);
        }
    });
}


board.addEventListener('drop',(e)=>{
    e.preventDefault();
});


function createnode(e){
    let node = document.createElement('span');
    node.setAttribute('class','node');
    node.setAttribute('draggable','true');
    node.addEventListener('click',editText);
    node.addEventListener('dragstart',moveOn);
    node.addEventListener('dragend',moveOff);
    board.appendChild(node);
}


function editText(e){
    let name = prompt('name this node');
    e.target.innerText = name;
    console.log(e.target);
}

function moveOn(e){
    setTimeout(()=>{
        e.target.className = 'hide';
    },0)
}


function moveOff(e){
    e.target.className = 'node';
    e.target.style.top = (e.y-40)+'px';
    e.target.style.left = (e.x-40)+'px';
}






