class memoTaker{
    constructor(textarea,btn,day){
        this.submit = btn;
        this.submit.textArea = textarea;
        this.submit.dayElement = day;
        this.inti();
        this.submit.lobby = {};
    }

    inti(){
        this.submit.addEventListener("click",this.addMemo);
    }

    addMemo(){
        if(this.textArea.value!="" && !this.lobby[this.dayElement.value]){
            let d = new Date();
            this.lobby[this.dayElement.value] = {
                date : d.toLocaleString(),
                text : this.textArea.value,
                day : this.dayElement.value
            }
        }
        console.log(this.lobby);
    }



}

let memo = new memoTaker(document.querySelector(".mainContent"),document.querySelector(".submitButton"),document.getElementById("dayLabelText"));