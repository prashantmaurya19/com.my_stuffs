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
        // this.data[res.key].push(res.value.map((va)=>{
        //     return [va]
        // }));
        // console.log(res.value,this.data[res.key].slice(-1));
        // debugger;
    }
}