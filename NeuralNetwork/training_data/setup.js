

function formatInput(obj){
    let big = BigInt(obj.map);
    let res = [];
    let line = BigInt("0b111111111111111111111111111");
    for(let i = 0;i < 3;i++){
        res.push(Number((big&line)>>BigInt(27*i)));
        line = line<<27n;
    }
    return res;
}


