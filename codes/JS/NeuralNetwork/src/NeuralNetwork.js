import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-wasm';
import {setWasmPaths} from '@tensorflow/tfjs-backend-wasm';

setWasmPaths({
    'tfjs-backend-wasm.wasm': 'http://localhost:3000/node_modules/@tensorflow/tfjs-backend-wasm/dist/tfjs-backend-wasm.wasm',
    'tfjs-backend-wasm-simd.wasm': 'http://localhost:3000/node_modules/@tensorflow/tfjs-backend-wasm/dist/tfjs-backend-wasm-simd.wasm',
    'tfjs-backend-wasm-threaded-simd.wasm': 'http://localhost:3000/node_modules/@tensorflow/tfjs-backend-wasm/dist/tfjs-backend-wasm-threaded-simd.wasm'
    });

class NeuralNetwork {
    constructor(obj) {
        this.config = obj;
    }

    async setBackend(){
        await tf.setBackend("wasm");
    }

    createModelHelper(layer) {
        let model = tf.sequential();
        for (let i = 0; i < layer.length; i++) {
            model.add(layer[i]);
        }
        return model;
    }

    createModel() {
        if(this.config.modelType = "sequential"){
            this.model = tf.tidy(this.createModelHelper.bind(this, this.config.layers));
            this.compileModel();
        }
    }

    setModel(model){
        this.model = model;
    }

    p_h(x) {
        try {
            if (!x) {
                return false;
            }
            let t = tf.tensor(x);
            let a = this.model.predict(t).dataSync();
            let res = []
            for (let i = 0; i < a.length; i++) {
                res.push(a[i]);
            }
            return res;
        } catch (error) {
            console.log(x, error);
        }
    }

    async pridict(data){
        return "not implemented";
    }

    predictSync(data) {
        return tf.tidy(this.p_h.bind(this, data));
    }

    compileModel() {
        this.model.compile(this.config.complieConfig);
    }

    async save(path) {
        console.log(await this.model.save(path));
    }

    async load(modelname) {
        this.model = await tf.loadLayersModel(modelname);
        this.compileModel();
    }

    async train(input, output) {
        return await this.model.fit(tf.tensor(input), tf.tensor(output), this.config.trainingConfig);
    }

    dispose() {
        this.model.dispose();
    }
}
export default NeuralNetwork; 