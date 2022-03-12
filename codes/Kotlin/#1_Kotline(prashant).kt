fun main(args : Array<String>){
//	println for printing new line after the content 
	println("hellow world")
//	print is for just printing the content it not add the new line after the content
	print("hellow")
	
	 
//	variables in kotlin
	val b = 89 //val variables cannot be changed
	var a:Int = 90 //var can change
	
/*
 	Nallable variable
	By default all the variables cannot be null
 	means if you want to store a null in any variable then must use a null able variable

 	#syntax
 
 	var / val variable_name : datatype_name ? = null
 
 
*/
	var c : Int ? = null
	
//	To define the type of any thing in kotlin use ': datatype_name' 
	
	
//	control Statements
	
	if(true){
		println("\nyou got it")
	}else{
		println("nooo")
	}
	
//	assigning value by the condition
	var d = if(false){
		90
	}else{
		"ok its done"
	}
	
//	when is work like the switch in java
	val value = when(a){
		90->{
			"prashant is awesome"
		}
		else->{
			"bad luck"
		}
	}
	
	
//	collection framework
//	1. Array
	val names = arrayOf("prashant","nishant","aman","mohit")

//	loops
//	for loop in kotlin
	for(name in names){
		println(name)
	}
	
    // this foreach is defined in the array object
	// names.forEach{
	// 	println(it)
	// }
	
//	Ranges : it returns a tempratay list of integers ot start ot end
	// for(i in 0..3 ){
	// 	print(i)
	// }
	for(namr in args){
	    greet(namr)

    }
    var ob = Prashant(12,12)
    ob.print()
}

fun greet(name: String){
	println("hellow $name")
}

class Prashant(var x : Int,var y :Int){
    fun print(){
        println("this ia the values "+(x+y))
    }
}
		