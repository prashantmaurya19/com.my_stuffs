window.int32_max_number = 4294967296; 

window.bitwise_operators = {
    and(a,b){
        return a&b;
    },
    or(a,b){
        return a|b;
    },
    xor(a,b){
        return a^b
    },
}


window.long_bitop = function (a,b,op){
    return bitwise_operators[op](Math.floor(a/int32_max_number),Math.floor(b/int32_max_number))*int32_max_number + (bitwise_operators[op](a%int32_max_number,b%int32_max_number)); 
}

function big_bitop(a,b,op){
    return Number(bitwise_operators[op](BigInt(a),BigInt(b)));
}