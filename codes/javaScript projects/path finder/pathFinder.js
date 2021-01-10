console.log(`hey , i'am ok what about you `);
let target = false;
let container = document.getElementsByClassName("container")[0];
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

function fillBoard(i, j) {
    if((i<0 || i>22) || (j <0 || j>22)){
        return false;
    }else if(target){
        return;
    }
    childId[i][j].style.background = magenta;
    if(!(((i+1)<0 || (i+1)>22) || (j < 0 || j>22))){
        fillBoard(i + 1, j);
    }else if(!(((i-1)<0 || (i-1)>22) || (j < 0 || j>22))){
        fillBoard(i - 1, j);
    }else if(!(((j-1)<0 || (j-1)>22) || (i < 0 || i>22))){
        fillBoard(i, j-1);
    }else if(!(((j+1)<0 || (j+1)>22) || (i < 0 || i>22))){
        fillBoard(i, j+1);
    }
    return true;
}

function create2dArray(x, y) {
    let array = new Array(new Array());
    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            let child = document.createElement("a");
            child.className = "child";
            container.appendChild(child);
            child.id = i + "," + j;
            array[i][j] = child;
        }
        array.push(new Array());
    }
    return array;
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


