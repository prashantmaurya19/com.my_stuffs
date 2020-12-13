const mongoose = require('mongoose')

// connecting to mongo if with this 
mongoose.connect("mongodb://localhost:27017/prashantDB",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log("connection seccessfull....."))
.catch((err)=> console.log(err));


/*
schema
A mongoose schema defines the structure of the document,
default values, validators , etc....,

Data types 
String ,Number,Date,buffer,Boolean,
mixed,Objectid,Array,Decimal128,
map,schema

*/

const data = new mongoose.Schema({
    name:{type:String,required:true},
    active:Boolean
})

/*
A Mongoose model is a wrapper on the Mongoose schema.
A Mongoose Schema defines the structure of the document.
default values, validators,etc ..., whereas 
a Mongoose model provides an interface to the 
database for creating querying , updateing
,deleting records,etc...
*/

// Creating collection
const prashant = new mongoose.model("prasahantDB",data)









