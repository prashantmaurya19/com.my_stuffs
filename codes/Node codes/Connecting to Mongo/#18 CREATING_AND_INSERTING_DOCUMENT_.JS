const mongoose = require('mongoose')

// connecting to mongo if with this 
mongoose.connect("mongodb://localhost:27017/prashantDB",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log("connection seccessfull....."))
.catch((err)=> console.log(err));


/*
schema
A mongoose schema defines the structure of the document,
default values, validators , etc....,
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

// Creating collection give the collection name in singular form
// mongoose automatically convert the singluar name to its purural
const prashant = new mongoose.model("prashantData",data)


// creating document or insert
// method 1
// const reachPrashant = new prashant({
    //     name:"bad_boy",
//     active:true
// });
// reachPrashant.save();

//method 2
async function createDocument(obj){
    try{
        const reachPrashant = new prashant(obj);
        //insted inserting one document at time 
        //you have another function called insertMany in place of save 
        //insertMany take an array of document [{},{}...]
        //and this method is in prashant so you need to do
        //some like this prashant.insertMany() ok.
        const result = await reachPrashant.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

createDocument({
    name:"Sab ka papa hu me",
    active:true
});







