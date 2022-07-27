let container = document.getElementsByClassName("container")[0];
let starting_position = '11,4';
let final_position = '11,18';
const white = "rgb(255, 255, 255)";
const blue = "rgb(0, 200, 255)";
const green = "rgb(71, 255, 54)";
const yellow = "rgb(250, 250, 0)";
const magenta = "rgb(255, 0, 100)";
const orange = "rgb(255, 130, 50)";
const skyblue = "rgb(255, 41, 105)";
const childs = create2dArray(23, 23);
let childrens = new Queue();

function travers(i,j){

    childrens.push(childs[i][j]);

    while(!childrens.isEmpty()){
        setTimeout(() => {
            let child = childrens.pop();
            child.style.background = magenta;
            child.nodes.forEach(element => {
                if(!element.visited){
                    childrens.push(element);
                    element.visited = true;
                }
            });
        }, 500);
    }
}

function fillBoard(childrens) {
    
}

function create2dArray(x, y) {
    let array = [];
    for (let i = 0; i < y; i++) {
        array.push(new Array());
        for (let j = 0; j < x; j++) {
            let child = document.createElement("a");
            child.classList.add('node');
            container.appendChild(child);
            child.id = i + "," + j;
            // child.nodes = new Array();
            let value = parseInt(Math.random()*2);
            let condition = (i+j)%2==0;
            if(value==1 && condition){
                child.style.background = blue;
                // child.style
            }
            array[i][j] = {element:child,i,j,value : condition ? value : 0};
        }
    }
    return array;
}

function checking(i,j,r){
    return i < 0 || i >= r || j < 0 || j >= r;
}

function addChildNode(){
    for(let i = 0;i<childs.length;i++){
        for(let j = 0 ;j < childs[0].length;j++){
            try {
                
                if(!checking(i-1,j,childs.length-1)){
                    childs[i][j].nodes.push(childs[i-1][j]);
                }
                if(!checking(i,j-1,childs.length-1)){
                    childs[i][j].nodes.push(childs[i][j-1]);
                }
                if(!checking(i+1,j,childs.length-1)){
                    childs[i][j].nodes.push(childs[i+1][j]);
                }
                if(!checking(i,j+1,childs.length-1)){
                    childs[i][j].nodes.push(childs[i][j+1]);
                }
                
            } catch (error) {
            }
        }
    }
}

addChildNode()
function resetBoard(i, j) {
    if (i < 0 || i > 22 || j < 0 || j > 22) {
        return false;
    } else if (childId[i][j].style.backgroundColor == white) {
        return false;
    } else {
        childId[i][j].style.backgroundColor = white;
    }
    resetBoard(i, j + 1);
    resetBoard(i, j - 1);
    resetBoard(i + 1, j);
    resetBoard(i - 1, j);
}


