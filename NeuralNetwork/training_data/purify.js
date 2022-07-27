// // const fs = require("fs");
// (
//     async function (){
//         let from_x = 0;
//         let to_x = 58;
//         let occured = {};
//         for (let i = from_x; i < to_x + from_x; i++) {
//             let data = await fetch(`./training_data/input/input_data_${i}.json`).then((d) => d.json());
//             // let data= JSON.parse(fs.readFileSync(`C:/Users/prashant/Downloads/Stuff/NeuralNetwork/training_data/input/input_data_${i}.json`, "utf-8"));
//             for(let j in data){
//                 if(occured[data[j].join("")]==undefined){
//                     occured[data[j].join("")] = true;
//                 }else{
//                     console.log(i,j,data[j].join());
//                 }
        
//             }
//         }
//         // console.log(occured);
//     }
// )()