import * as tf from '@tensorflow/tfjs';
// const LineChart= require("./LineChart");
const NeuralNetwork = require("./NeuralNetwork");
import '../style/main.scss';

// console.log(LineChart.default);

// const chart = new LineChart.default(document.getElementById("root"), {
//     data: {
//         datasets: [{
//             radius: 0,
//             data: [],
//             borderColor: "red",
//             borderWidth: 1
//         }]
//     }
// });

function sleep(time){
    return new Promise((r,j)=>setTimeout(r,time));
}

const nn = new NeuralNetwork.default({
    layers: [
        tf.layers.dense({
            units: 81,
            inputShape: [81],
            activation: "relu6"
        }),
        tf.layers.dense({
            units: 150,
            activation: "relu6"
        }),
        tf.layers.dense({
            units: 150,
            activation: "relu6"
        }),
        tf.layers.dropout({
            rate: 0.4,
            seed: 7,
        }),
        tf.layers.dense({
            units: 150,
            activation: "relu6"
        }),
        tf.layers.dense({
            units: 150,
            activation: "relu6"
        }),
        tf.layers.dense({
            units: 1,
            activation: "relu6"
        })
    ],
    modelType: "sequential",
    complieConfig: {
        optimizer: tf.train.sgd(0.5),
        loss: 'meanSquaredError',

    },
    trainingConfig: {
        epochs: 10,
        callbacks: {
            onEpochEnd: function (epoch,logs) {
                // if (chart.chart.data.datasets[0].data.length >= 500) {
                //     chart.remove(100, false);
                // }
                // chart.add("", {
                //     x: epoch,
                //     y: logs.loss
                // });
                console.log(epoch,logs.loss);
            },
        },
        batchSize: 10000
    }
});


(
    async function (){
        await nn.setBackend();
        // for(let i = 0;i < 10;i++){
        //     await sleep(1000);
        //     chart.add("",{x:i,y:Math.random()});
        //     console.log({x:i,y:Math.random()});
        // }
    }
)();

