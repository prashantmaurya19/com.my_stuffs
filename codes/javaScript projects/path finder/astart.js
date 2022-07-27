async function astart(start, end, h, grid) {
    start.f = h;
    start.g = 0;
    let lowest = Infinity;
    while (openset.length > 0) {
        await sleep(100);
        let current;
        let locallowest = 0;
        for (let i in openset) {
            if (openset[i].f < lowest) {
                lowest = openset[i].f;
                current = openset[i];
            }
            if (openset[i].f < openset[locallowest].f) {
                locallowest = i;
            }
        }
        if (!current) {
            current = openset[locallowest];
        }
        // console.log(current,openset);
        if (this.equal(current, end)) {
            return reconnect(current);
            console.log(current, end);
            return;
        }
        openset = openset.filter(deletes.bind(this, current));
        // console.log(openset);
        // return;
        closeset.push(current);
        let neighbour = getNeighbour(current, grid);
        for (let i in neighbour) {
            if (neighbour[i]) {
                // let tempg = current.f;
                // console.log(i);
                // console.log(neighbour[i]);
                if (!closeset.includes(neighbour[i])) {
                    let temg = current.g + 1;
                    if (openset.includes(neighbour[i]) && temg < neighbour[i].g) {
                        neighbour[i].g = temg;
                    } else {
                        neighbour[i].g = temg;
                        openset.push(neighbour[i]);
                        neighbour[i].element.style.background = "red";
                    }
                    neighbour[i].h = heuritic(neighbour[i], end);
                    neighbour[i].f = neighbour[i].g + heuritic(neighbour[i], end);
                    neighbour[i].previous = current;
                    // console.log();
                }

            }
        }
        // break;
        // if(closeset.length>240){
        //     current.element.style.background = "black";
        //     debugger;
        //     // console.log(current,"fail safe activated");
        //     // break;
        // }
    }
    console.log("not find any path");
}

async function reconnect(start) {
    let temp = start;
    while (temp) {
        await sleep(200);
        // console.log(temp);
        temp.element.style.background = "green";
        temp = temp.previous;
    }
}

function deletes(ele, d) {
    // console.log(ele,d);
    return !equal(ele, d);
}

function equal(a, b) {
    return a.i == b.i && a.j == b.j;
}

function heuritic(curr, end) {
    return Math.abs(curr.i - end.i) + Math.abs(curr.j - end.j) - 4;
}

function getNeighbour(current, grid) {
    let n = [];
    let n1 = current.i + 1;
    if (n1 >= 0 && n1 < grid.length && grid[current.i + 1][current.j].value!=1) {
        n.push(grid[current.i + 1][current.j]);
    }
    n1 = current.i - 1;
    if (n1 >= 0 && n1 < grid.length && grid[current.i - 1][current.j].value!=1) {
        n.push(grid[current.i - 1][current.j]);
    }
    n1 = current.j + 1;
    if (n1 >= 0 && n1 < grid[0].length && grid[current.i][current.j + 1].value!=1) {
        n.push(grid[current.i][current.j + 1]);

    }
    n1 = current.j - 1;
    if (n1 >= 0 && n1 < grid[0].length && grid[current.i][current.j - 1].value!=1) {
        n.push(grid[current.i][current.j - 1]);

    }
    return n;
}

function check() {
    for (let i in childs) {
        for (let j in childs[i]) {
            console.log(closeset.includes(childs[i][j]));
        }
    }
}

function s(time,rel,rej){
    if(time==0){
        rel(true);
    }
    // console.log(time);
    setTimeout(s.bind(this,time-100,rel,rej),100);
}

async function sleep(time){
    return new Promise(s.bind(this,time));
}

(
    async function (){
        // await sleep(4000);
        console.log("completed");
    }
)()

let start = childs[0][0];
start.element.style.background  = yellow;
let end = childs[20][22];
end.element.style.background = "green";
start.value = 0;
end.value = 0;
let openset = [start];
let closeset = [];
// console.log(end,childs.length-1,childs[0].length-1);
astart(start, end, heuritic(start, end), childs);