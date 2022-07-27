const tf = require('@tensorflow/tfjs-node');
// import ''
const NeuralNetwork = require('C:/Users/prashant/Downloads/Stuff/NeuralNetwork/NeuralNetwork');

(
    async function (){
        // await tf.setBackend("wasm");
        const nn = new NeuralNetwork({
            layers: [
                tf.layers.dense({
                    units: 70,
                    inputShape: [3],
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
                    activation: "sigmoid"
                })
            ],
            modelType: "sequential",
            complieConfig: {
                optimizer: tf.train.sgd(0.5),
                loss: 'meanSquaredError',

            },
            trainingConfig: {
                epochs: 100,
                callbacks: {
                    onEpochEnd: function (epoch,logs) {
                        console.log(epoch,logs.loss);
                    },
                },
                batchSize: 10000
            }
        });


    }
)()