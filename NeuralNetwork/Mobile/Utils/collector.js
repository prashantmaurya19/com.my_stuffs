class Collector{
    constructor(){
        this.data = {};
    }

    async collect(fun){
        let res = await fun();
        this.data[res.key] = res.value;
    }

    async groupCollector(fun){
        let res ;
        if(typeof fun =="function"){
            res = await fun();
        }else{
            res = fun;
        }
        if(this.data[res.key]==undefined){
            this.data[res.key] = [];
        }
        this.data[res.key].push(res.value);
    }

    async appendCollector(fun){
        let res ;
        if(typeof fun =="function"){
            res = await fun();
        }else{
            res = fun;
        }
        if(this.data[res.key]==undefined){
            this.data[res.key] = [];
        }
        this.data[res.key] = this.data[res.key].concat(res.value);
    }
}