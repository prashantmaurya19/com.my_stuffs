class Betsmanager {
    constructor() {
        this.mainDataBase = (this.getMainData()) ? this.getMainData() : {} ; 
        this.functionKeys = {
            "amount" : ".amount",
            "gainBtn" : ".gainButton",
            "lossBtn" : ".lossButton",
            "display" : ".displayReport",
            "reset" : "#reset",
            "reportBtn" : "#allReport"
        }

        for(let btnName in this.functionKeys){
            this[btnName] = document.querySelector(this.functionKeys[btnName]);
            this[btnName].master = this;
        }
        this.reset.addEventListener("click",this.resetClick);
        this.reportBtn.addEventListener("click",this.reportDisplay);
        this.lossBtn.addEventListener("click", this.BtnClick);
        this.gainBtn.addEventListener("click", this.BtnClick);
    }

    insert(date, amount) {
        this.mainDataBase[date] = amount;
    }

    dateFormater(dateLocalString){
        dateLocalString = dateLocalString.split("/");
        return `${dateLocalString[2]}-${dateLocalString[0]}-${dateLocalString[1]}`;
    }

    BtnClick() {
        let date = new Date().toLocaleDateString();

        if (this.master.amount.value) {
            this.master.insert(this.master.dateFormater(date),((this.value=="gain") ? 1 : -1)*Number(this.master.amount.value));
            this.master.setMainData();
        }
    }
    
    setMainData(){
        localStorage.setItem("betsManager",JSON.stringify(this.mainDataBase));
    }
    
    getMainData(){
        return JSON.parse(localStorage.getItem("betsManager"));
    }

    reportDisplay(){
        this.master.display.innerHTML = "";
        for(let i in this.master.mainDataBase){
            this.master.display.innerHTML += `<span class="entry">
            <span class="date">${i}</span>
            <span class="value ${(Number(this.master.mainDataBase[i])>0) ? "gain" : "loss"}">${this.master.mainDataBase[i]}</span>
                </span>`;
        }
    }

    resetClick(){
        if(this.value=="reset"){
            this.master.display.innerHTML = "";
            let text = document.createElement("textarea");
            text.id = "resetData";
            text.wrap = "none";
            text.innerText = JSON.stringify(this.master.mainDataBase,undefined,1);
            this.value = "done";
            this.master.display.append(text);
        }else{
            try {
                let newdata = JSON.parse(this.master.display.firstElementChild.value);
                this.master.display.innerHTML = "";
                this.master.mainDataBase = newdata;
                this.value = "reset";
                this.master.setMainData();
            } catch (error) {
                
            }

        }
    }

}

const m = new Betsmanager();