//this function takes a array of array and 
//cut them and place them in a sequential mananer
/*
    for example : input = [
        [1,2,3,4,5],[6,7,10,8,9],[11,21,21,31,41]
    ],2

    output : [
        [
            [1,2],[6,7],[11,21]
        ],
        [
            [3,4,5],[10,8,9],[21,31,41]
        ]
    ]
    note : remaining elements will put in the last part
*/ 
function createArrayInParts(arrs,part){
    let res = [];
    for(let i in arrs){
        let parts = createArrayParts(arrs[i],part);
        for(let j in parts){
            if(i=="0"){
                res.push([]);
            }
            res[j].push(parts[j]);
        }
    }
    return res;
}

function createArrayParts(arr,part){
    let x = Math.floor(arr.length/part);
    let fraction = arr.length%part;
    let res = [];
    for(let i = 0;i < part;i++){
        res.push(arr.slice(i*x,(i*x)+x));
    }
    if(fraction>0){
        res[res.length-1] = res[res.length-1].concat(arr.slice(((part-1)*x)+x,((part-1)*x)+x+fraction));
    }
    return res;
}