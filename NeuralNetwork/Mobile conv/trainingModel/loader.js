const coll = new Collector();
const nn = new NeuralNetwork({
    layers: [
        tf.layers.conv2d({
            filters:1,
            kernelSize:3,
            activation:'relu',
            inputShape:[9,9,1],
            useBias:true
        }),
        tf.layers.conv2d({
            filters:1,
            kernelSize:3,
            activation:'relu',
            useBias:true
        }),
        tf.layers.conv2d({
            filters:1,
            kernelSize:3,
            activation:'relu',
            useBias:true
        }),
        tf.layers.flatten(),
        tf.layers.dense({
            units: 54,
            activation: "relu",
            useBias:true
        }),
        tf.layers.dense({
            units: 45,
            activation: "relu",
            useBias:true
        }),
        tf.layers.dense({
            units: 27,
            activation: "relu",
            useBias:true
        }),
        tf.layers.dense({
            units: 11,
            activation: "softmax",
            useBias:true
        })
    ],
    modelType: "sequential",
    complieConfig: {
        optimizer: tf.train.sgd(0.3),
        loss: tf.losses.logLoss,
        metrics: ['accuracy']
    },
    trainingConfig: {
        epochs: 1,
        // callbacks:{
        //     onTrainEnd:(log)=>{
        //         console.log(log);
        //     }
        // },
        batchSize: 10000
    }
});

function sleep(time){
    return new Promise((res,j)=>setTimeout(res,time));
}

(
    async function (){
        // await tf.setBackend("webgl");

        // loading the training data here
        let from_x = 0;
        let to_x = 1;
        for (let i = from_x; i < to_x+from_x; i++) {
            setstate(`state : ${Math.floor((((i-from_x))/to_x)*100)}% resources is loaded`,false);
            await coll.groupCollector({
                value: await fetch(`./data/input/input_data_${i}.json`).then((d) => d.json()),
                key: "input"
            });
            await coll.groupCollector({
                value: await fetch(`./data/output/output_data_${i}.json`).then((d) => d.json()),
                key: "output"
            });
        }
        setstate(`state : resources loaded successfully`,true);
    }
)()

function setstate(msg,op){
    let state = document.querySelector(".state");
    state.classList.remove(op ? "incompleted" : "completed");
    state.classList.add(op ? "completed" : "incompleted");
    state.innerHTML = msg;
}