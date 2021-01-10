// inheritance in javascript

class Employee{
	constructor(name , exp , div){
		this.name = name;
		this.exp = exp;
		this.division = div; 
	}
	getName(){
		return `name = ${this.name}`;
	}
	totalExp(){
		return this.exp-2001;
	}
}


class programmer extends Employee{
	constructor(name , exp , div,lang){
		//super() is used for calling the constructor of his parent class
		super(name , exp , div);
		this.lang = lang;
	}

	favLang(lang){
		this.lang= lang;
		return "ok";
	}

	static multiple(a,b){
		return a*b;
	}



}


let prashant = new programmer("prashant",2001,"sf","javascript");
console.log(prashant.getName());


