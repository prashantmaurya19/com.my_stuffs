console.log('this is to do list manager');
const container = document.querySelector('body');
const add = document.querySelector('#add');
const paint = document.querySelector('#text');
const complete = "complete";
const notComplete = "notComplete";
let tasks = document.querySelector('#tasks');
let count = localStorage.getItem('number');
let task_name = "";
let dones = document.getElementsByClassName('done');
let deletes = document.getElementsByClassName('delete');
update();
function update(){
    tasks.innerHTML = localStorage.getItem('nodes').trim();
    tasks.style.gridTemplateRows=`repeat(${count+1},50px)`;
} 

for(let i = 0;i<dones.length;i++){
    dones[i].addEventListener('click',done);
}
for(let i = 0;i<dones.length;i++){
    deletes[i].addEventListener('click',deleteNode);
}


function done(e){
    e.preventDefault();
    let parent = e.target.parentElement;
    let child = parent.firstElementChild.firstElementChild;
    child.className = 'complete';
    localStorage.setItem('nodes',tasks.innerHTML.trim());
}

function deleteNode(e){
    e.preventDefault();
    let parent = e.target.parentElement;
    tasks.removeChild(parent);
    localStorage.setItem('nodes',tasks.innerHTML.trim());
    count--;
    localStorage.setItem('number',count);
}

add.addEventListener('click',()=>{
    if(paint.value.trim()==''){
        return;
    }else{
        addTask(paint.value);
    }
});



function addTask(taskname){
    count++;
    let card = `
    <span class="card">
    <span class="card_element"><p class=${notComplete}>${taskname}</p></span>
    <a class="card_element done" href="#"></a>
    <a class="card_element delete"  href="#"></a>
    </span>
    `;
    tasks.innerHTML += card;
    localStorage.setItem('nodes',tasks.innerHTML.trim());
    tasks.children[count-1].children[1].addEventListener('click',done);
    tasks.children[count-1].children[2].addEventListener('click',deleteNode);
    tasks.style.gridTemplateRows=`repeat(${count},50px)`;
    localStorage.setItem('number',count);
}

paint.addEventListener('keypress',(e)=>{
    if(e.target.value.trim()!='' && e.key=='Enter'){
        addTask(paint.value);
    }else{
        return;
    }
})






