
const prompt = require("prompt-sync")();

function hexToDecimal(data){
    let alphNum = {
        'f':15,
        'a':10,
        'b':11,
        'c':12,
        'd':13,
        'e':14
    }
    let result = 0;
    for(let i = data.length-1;i>=0;i--){
        if(alphNum[data[i]] != undefined){
            result+=alphNum[data[i]]*Math.pow(16,(data.length-1)-i);
        }else{
            result+=parseInt(data[i])*Math.pow(16,(data.length-1)-i);
        }
    }
    console.log(result)

}

function checkColors(color){
    return color<0 || color>255;
}

function deciToHex(number){
    return `${deciTohexHelper(number,'d')}${deciTohexHelper(number,'m')}`;
}

function deciTohexHelper(number,operator){
    let alphNum = {
        15:'f',
        10:'a',
        11:'b',
        12:'c',
        13:'d',
        14:'e'
    }
    let quesint = (operator=='m') ? number%16 : number/16;
    if(alphNum[parseInt(quesint)]!=undefined){
        return alphNum[parseInt(quesint)]
    }else{
        return `${parseInt(quesint)}`;
    }
}

function rgbTohex(red,green,blue){
    
    if(checkColors(red)||checkColors(blue)||checkColors(green)){
        console.log("nocolor");
        return;
    }
    return `#${deciToHex(red)}${deciToHex(green)}${deciToHex(blue)}`;
}

