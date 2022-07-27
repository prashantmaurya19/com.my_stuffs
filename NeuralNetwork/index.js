let nn;
let chart = new LineChart(document.getElementById("root"), {
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

let coll = new Collector();

function formatInputs(obj) {
    let big = BigInt(obj.map);
    let res = [];
    let line = BigInt(1);
    for (let i = 0; i < 81; i++) {
        res.push(Number((big & line) >> BigInt(i)));
        line = line << 1n;
    }
    return res;
}

async function trainHelper() {
    let res = {count:0,loss:0,acc:0}
    for (let i in coll.data.input) {
        let h = await nn.train(coll.data.input[i], coll.data.output[i]);
        // console.log(h);
        document.querySelector("#root #individual").innerHTML =`epoch : ${i} <br>loss : ${h.history.loss[0]}<br>accuracy : ${h.history.acc[0]}`;
        res.count++;
        res.loss +=h.history.loss[0];
        res.acc +=h.history.acc[0]; 
        h = null;
        delete h;
    }
    return res;
}

async function train(x) {
    for(let i = 0;i < x;i++){
        let res = await trainHelper();
        document.querySelector("#root #whole").innerHTML = `epoch : ${i} <br>loss : ${res.loss}/${res.count} -> ${res.loss/res.count}<br>accuracy : ${res.acc}/${res.count} -> ${res.acc/res.count}`;
    }
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

(
    async function () {
        await tf.setBackend("webgl");
        let start_x = 0;
        for (let i = 0+start_x; i < 58+start_x; i++) {
            await coll.groupCollector({
                value: await fetch(`./training_data/input/input_data_${i}.json`).then((d) => d.json()),
                key: "input"
            });
            await coll.groupCollector({
                value: await fetch(`./training_data/output/output_data_${i}.json`).then((d) => d.json()),
                key: "output"
            });
        }


        nn = new NeuralNetwork({
            layers: [
                tf.layers.conv2d({
                    filters:1,
                    kernelSize:3,
                    activation:'relu',
                    inputShape:[9,9,1],
                    // kernelInitializer:'VarianceScaling',
                    useBias:true
                }),
                tf.layers.conv2d({
                    filters:1,
                    kernelSize:3,
                    activation:'relu',
                    // kernelInitializer:'VarianceScaling',
                    useBias:true
                }),
                tf.layers.conv2d({
                    filters:1,
                    kernelSize:3,
                    activation:'relu',
                    // strides:1,
                    // kernelInitializer:'VarianceScaling',
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
                shuffle:true,
                // validationSplit:0.3,
                // callbacks:{
                //     onBatchEnd:(epoch,logs)=>{
                //         console.log(epoch,logs) ;      
                //     }
                // },
                batchSize: 5000 
            }
        });
        // await nn.load("http://127.0.0.1:8158/bb_agent_model.json");
        nn.createModel();
        nn.compileModel();
        await coll.groupCollector({
            value: await fetch(`./training_data/pure_data.json`).then((d) => d.json()),
            key: "pure"
        });
        console.log("setting up are Completed".toUpperCase());
        // await nn.save('downloads://bb_agent_model');
    }
)()

function decode(arr){
    let num = BigInt(0);
    let line = BigInt(511);
    for(let i in arr){
        num+=(line&BigInt(arr[i]))<<BigInt(parseInt(i)*9);
    }
    return num;
}