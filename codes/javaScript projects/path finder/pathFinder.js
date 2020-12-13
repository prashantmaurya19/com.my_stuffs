console.log(`hey , i'am ok what about you `);
let target = false;
let container = document.getElementsByClassName("container")[0];
document.querySelector('#removeColor').addEventListener('click', reseted);
document.querySelector('#start').addEventListener('click', fill);
let starting_position = '11,4';
let final_position = '11,18';
const childId = create2dArray(23, 23);
const white = "rgb(255, 255, 255)";
const blue = "rgb(0, 200, 255)";
const green = "rgb(71, 255, 54)";
const yellow = "rgb(250, 250, 0)";
const magenta = "rgb(255, 0, 100)";
const orange = "rgb(255, 130, 50)";
const skyblue = "rgb(255, 41, 105)";
const pen_Final_color = "linear-gradient(270deg,rgb(182, 255, 185),rgb(255, 26, 26))";
const pen_start_color = "linear-gradient(90deg,rgb(255, 199, 199),rgb(37, 255, 84))";
let pen = false;
let Epen = document.getElementById('pen'); //it contain pen element
Epen.style.background = pen_Final_color;
childId.pop();
let nip = document.createElement('span');
nip.setAttribute('draggable','true');
nip.id = 'nip';
console.log(nip.style);

nip.addEventListener('dblclick',(e)=>{
    console.log('nip is over');
    pen = false;
    Epen.style.background = pen_Final_color;
    document.querySelector('body').removeChild(nip);
});

document.querySelector('body').addEventListener('mousemove',(e)=>{

    if(pen){
        nip.style.left = (e.clientX-10)+'px';
        nip.style.top = (e.clientY-10)+'px';
    }
});


Epen.addEventListener('click', (e) => {
    if(pen){
        pen = false;
        e.target.style.background = pen_Final_color;
        document.querySelector('body').removeChild(nip);
    }else{
        pen = true;
        document.querySelector('body').appendChild(nip);
        e.target.style.background = pen_start_color;
    }
    console.log(e);
});

update();

function setStarting_point(e) {
    starting_position = e;
    update();
}

function setFinal_point(e) {
    final_position = e;
    update();
}

function changeBackground() {
    if (this.style.backgroundColor == white) {
        this.style.backgroundColor = blue;
        return true;
    } else if (this.style.backgroundColor == magenta) {
        return false;
    } else if (this.style.backgroundColor == yellow) {
        return false;
    } else {
        this.style.backgroundColor = white;
        return true;
    }
}

function fillBoard(i, j) {
    if (i < 0 || i > 22 || j < 0 || j > 22) {
        return false;
    } else if (childId[i][j].style.backgroundColor == yellow) {
        target = true;
        return true;
    } else if (target) {
        return false;
    } else if (childId[i][j].style.backgroundColor == blue) {
        return false;
    } else if (childId[i][j].style.backgroundColor == orange) {
        return false;
    } else if (childId[i][j].style.backgroundColor == magenta) {

    } else if (childId[i][j].style.backgroundColor == white) {
        childId[i][j].style.backgroundColor = orange;
    }

    let block3 = fillBoard(i + 1, j);
    let block4 = fillBoard(i - 1, j);
    let block2 = fillBoard(i, j - 1);
    let block1 = fillBoard(i, j + 1);

    if (block1) {
        if (childId[i][j].style.backgroundColor == magenta) {
            return true;
        }
        childId[i][j].style.backgroundColor = green;
        return true;
    } else if (block2) {
        if (childId[i][j].style.backgroundColor == magenta) {
            return true;
        }
        childId[i][j].style.backgroundColor = green;
        return true;
    } else if (block3) {
        if (childId[i][j].style.backgroundColor == magenta) {
            return true;
        }
        childId[i][j].style.backgroundColor = green;
        return true;
    } else if (block4) {
        if (childId[i][j].style.backgroundColor == magenta) {
            return true;
        }
        childId[i][j].style.backgroundColor = green;
        return true;
    }
    return false;
}

function create2dArray(x, y) {
    let array = new Array(new Array());
    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            let child = document.createElement("a");
            child.className = "child";
            child.style.backgroundColor = 'rgb( 255, 255, 255)';
            child.addEventListener('click', changeBackground);
            child.addEventListener('dragover', dragOver);
            child.addEventListener('dragenter', dragEnter);
            child.addEventListener('dragleave', dragLeave);
            child.addEventListener('drop', Drop);
            container.appendChild(child);
            child.id = i + "," + j;
            array[i][j] = child;
        }
        array.push(new Array());
    }
    return array;
}

function fill(e) {
    e.preventDefault();
    let i, j;
    let num = String(starting_position).split(',');
    i = Number(num[0]);
    j = Number(num[1]);
    fillBoard(i, j);
}

function resetBoard(i, j) {
    if (i < 0 || i > 22 || j < 0 || j > 22) {
        return false;
    } else if (childId[i][j].style.backgroundColor == yellow) {
        return false;
    } else if (childId[i][j].style.backgroundColor == white) {
        return false;
    } else if (childId[i][j].style.backgroundColor == magenta) {
        return false;
    } else {
        childId[i][j].style.backgroundColor = white;
    }

    resetBoard(i, j + 1);
    resetBoard(i, j - 1);
    resetBoard(i + 1, j);
    resetBoard(i - 1, j);
    return true;
}

function reseted() {
    resetBoard(0,0);
    update();
}

function dragStart(e) {
    console.log('dragstart has been trigged');
    setTimeout(() => {
        e.target.style.backgroundColor = white;
    }, 0);
}

function dragEnd(e) {
    console.log('dragend has been trigged', e.target);
    e.target.setAttribute('draggable', 'false');
}

function update() {
    document.getElementById(starting_position).style.backgroundColor = magenta;
    document.getElementById(final_position).style.backgroundColor = yellow;
    document.getElementById(starting_position).setAttribute('draggable', 'true');;
    document.getElementById(final_position).setAttribute('draggable', 'true');
    document.getElementById(starting_position).addEventListener('dragstart', dragStart);
    document.getElementById(starting_position).addEventListener('dragend', dragEnd);
    document.getElementById(final_position).addEventListener('dragstart', dragStart);
    document.getElementById(final_position).addEventListener('dragend', dragEnd);
}


function dragOver(e) {
    e.preventDefault();
    if(pen){
        
    }else{
        e.target.style.backgroundColor = skyblue;
    }
}

function dragLeave(e) {
    if (pen) {
        e.target.style.backgroundColor = blue;
    } else {
        e.target.style.backgroundColor = white;
    }
}

function dragEnter(e) {
    e.preventDefault();
    if (pen) {
        e.target.style.backgroundColor = blue;
    } else {
        e.target.style.backgroundColor = magenta;
    }
}

function Drop(e) {
    if(pen){

    }else{
        setStarting_point(this.id);
    }
}


