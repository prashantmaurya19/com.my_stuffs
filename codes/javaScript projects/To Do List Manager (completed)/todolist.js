const container = document.querySelector('body');
const add = document.querySelector('#add');
const paint = document.querySelector('#text');
const tasks = document.querySelector('#tasks');
let count = localStorage.getItem('number');
let dones = document.getElementsByClassName('done');
let deletes = document.getElementsByClassName('delete');
update();
function update(){
    try{
        tasks.innerHTML = localStorage.getItem('nodes').trim();
    }catch(err){
        console.log(err);
    }
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
        paint.value = "";
    }
});



function addTask(taskname){
    count++;
    let c = document.createElement("span");
    c.className = "card";
    c.innerHTML = `<span class="card_element"><p class="notComplete">${taskname}</p></span>`
    let d = document.createElement("a");
    d.href = "#";
    d.className = "card_element done";
    d.addEventListener('click',done);
    let d1 = document.createElement("a");
    d1.href = "#";
    d1.className = "card_element delete";
    d1.addEventListener('click',deleteNode);
    c.appendChild(d);
    c.appendChild(d1);
    tasks.appendChild(c);
    localStorage.setItem('nodes',tasks.innerHTML.trim());
    localStorage.setItem('number',count);
}

paint.addEventListener('keypress',(e)=>{
    if(e.target.value.trim()!='' && e.key=='Enter'){
        addTask(paint.value);
    }else{
        return;
    }
})



