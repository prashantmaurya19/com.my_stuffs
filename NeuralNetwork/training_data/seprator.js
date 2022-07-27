const fs = require("fs");

function reshapeHelper(arr, len) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr.slice(i, i + len));
    }
    return res;
}

function reshape(arr, dims) {
    let a  = arr;
    for (let i = dims.length - 1; i >= 0; i--) {
        a = reshapeHelper(a, dims[i]);
    }
    return a;
}

function formatInputs(obj) {
    let big = BigInt(obj.map);
    let res = [];
    let line = BigInt(511);
    for (let i = 0; i < 9; i++) {
        res.push(Number((big & line) >> BigInt(i*9))/511);
        line = line << 9n;
    }
    return res;
}

function formatOutput(obj) {
    let output = new Array(11);
    output.fill(0);
    output[Math.floor((obj.win / obj.visit) * 10)] = 1;
    if (obj.win !== obj.visit && obj.win != 0) {
        console.log(obj, obj.win / obj.visit, output);
    }
    return output;
}
let data = JSON.parse(fs.readFileSync("C:/Users/prashant/Downloads/Stuff/NeuralNetwork/training_data/pure_data.json", "utf-8"));




let input = [];
let threshold = 10000;
let location = "input";

// for(let i = 0;i < Math.floor(data.length/50000);i++){
//     fs.writeFileSync(`C:/Users/prashant/Downloads/Stuff/NeuralNetwork/training_data/outputs/output_data_${i}.json`,JSON.stringify(data.slice(i*50000,((i+1)*50000))));
// }
// console.log(formatInputs(data[0]));
// process.exit();
let count = 0;
for (let i in data) {
    switch (location) {
        case "input": {
            // let a = ;
            input.push(formatInputs(data[i]));
        }
        break;
    case "output": {
        input.push(formatOutput(data[i]));
    }
    break;
    }
    // console.clear();
    // console.log(`Transforming ${Math.floor((parseInt(i)/data.length)*100)}% ...`);
    if (input.length == threshold) {
        fs.writeFileSync(`C:/Users/prashant/Downloads/Stuff/NeuralNetwork/training_data/${location}/${location}_data_${count}.json`, JSON.stringify(input));
        input = [];
        count++;
    }
}
if (input.length > 0) {
    fs.writeFileSync(`C:/Users/prashant/Downloads/Stuff/NeuralNetwork/training_data/${location}/${location}_data_${count}.json`, JSON.stringify(input));
}

// fs.writeFileSync("C:/Users/prashant/Downloads/Stuff/NeuralNetwork/training_data/output_data.json",JSON.stringify(input));