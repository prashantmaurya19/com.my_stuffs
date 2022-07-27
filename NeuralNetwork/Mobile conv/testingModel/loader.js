const chart = new LineChart(document.getElementById("vis"), {
    data: {
        datasets: [{
                radius: 0,
                data: [{
                    x: 0,
                    y: 0
                }],
                borderColor: "blue",
                borderWidth: 1
            },
            {
                radius: 0,
                data: [{
                    x: 0,
                    y: 0
                }],
                borderColor: "red",
                borderWidth: 1
            }
        ]
    }
});
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
        optimizer: tf.train.adadelta(0.3),
        loss: tf.losses.huberLoss,
        metrics: ['accuracy']
    },
    trainingConfig: {
        epochs: 1,
        batchSize: 500
    }
});

const coll = new Collector();

(
    async function (){
        let from_x = 40;
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
        await nn.load(window.location.href.replace("TestModel.html","model/bb_agent_model.json"));
        setstate("state : resources are loaded",true);
    }
)()

function setstate(msg,op){
    let state = document.querySelector(".state");
    state.classList.remove(op ? "incompleted" : "completed");
    state.classList.add(op ? "completed" : "incompleted");
    state.innerHTML = msg;
}

async function test(x,limit_x,limit_y){
    for(let i = limit_x;i < limit_y;i++){
        await tf.nextFrame();
        let output = await nn.predict([coll.data.input[x][i]]);
        if (chart.chart.data.datasets[0].data.length >= 500) {
            chart.remove(100, false);
        }
        chart.add("", {
            x: parseInt(i),
            y: output.indexOf(Math.max(...output))
        }, {
            x: parseInt(i),
            y: coll.data.output[x][i].indexOf(1)
        });
    }
}