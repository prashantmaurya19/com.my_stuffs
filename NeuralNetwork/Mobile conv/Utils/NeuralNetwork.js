class NeuralNetwork {
    constructor(obj) {
        this.config = obj;
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

    async predict(data){
        let a = tf.tensor(data);
        let pre = await this.model.predict(a).data();
        let res = [];
        for (let i = 0; i < pre.length; i++) {
            res.push(pre[i]);
        }
        a.dispose();
        return res
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
        let a = tf.tensor(input);
        let b =  tf.tensor(output);
        let res = await this.model.fit(a,b, this.config.trainingConfig);
        a.dispose();
        b.dispose();
        return res;
    }

    dispose() {
        this.model.dispose();
    }
}

// if(module){
//     module.exports = NeuralNetwork; 
// }