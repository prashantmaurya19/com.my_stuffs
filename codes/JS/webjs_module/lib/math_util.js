function ranInt(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function ranFloat(max, min) {
    return (Math.random() * (max - min)) + min;
}
function getRangeFromNumber(num,part){
    let res = [];
    let x = Math.floor(num/part);
    let mod = num%part;
    let total=0;
    for(let i = 0;i < part-1;i++){
        res.push([total,total+x]);
        total+=x;
    }
    res.push([total,total+mod+x]);
    return res;
}