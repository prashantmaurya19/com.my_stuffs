class Compress{
    constructor(){
        this.hyperPrameter = {
            compress:[2,64],
            decompress:[64,2]
        }
    }

    power(x, y) {// x**y
        let ZERO = BigInt(0);
        if (y === ZERO) return BigInt(1);
        let TWO = BigInt(2);
        let p2 = this.power(x, y / TWO);
        if (y % TWO === ZERO) return p2 * p2;
        return x * p2 * p2;
    };
    
    compressHelper(value, from_base, to_base){
        let range = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+_".split("");
        if (from_base < 2 || from_base > range.length)
            throw new RangeError(`convertBase() from_base argument must be between 2 and ${range.length}`);
        if (to_base < 2 || to_base > range.length)
            throw new RangeError(`convertBase() to_base argument must be between 2 and ${range.length}`);
        
        let from_range = range.slice(0, from_base);
        let to_range = range.slice(0, to_base);
    
        let from_base_big = BigInt(from_base);
        let to_base_big = BigInt(to_base);
        
        let dec_value = value.split("").reverse().reduce((carry, digit, index) => {
            let fromIndex = from_range.indexOf(digit);
            if (fromIndex === -1)
                throw new RangeError("not a digit");
            return carry + BigInt(fromIndex) * this.power(from_base_big, BigInt(index));
        }, BigInt(0));
        
        let new_value = "";
        while (dec_value > 0) { 
            new_value = to_range[dec_value % to_base_big] + new_value;
            dec_value = (dec_value - dec_value % to_base_big) / to_base_big;
        }
        return new_value || "0";
    }

    compress(str){
        // str = str.replaceAll("0","^");
        return this.compressHelper(str,this.hyperPrameter.compress[0],this.hyperPrameter.compress[1]);
    }

    decompress(str){
        return this.compressHelper(str,this.hyperPrameter.decompress[0],this.hyperPrameter.decompress[1]);
    }
}

module.exports = Compress;