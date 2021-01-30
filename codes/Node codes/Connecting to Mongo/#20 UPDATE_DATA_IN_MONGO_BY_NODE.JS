
const mongoose = require('mongoose')

// connecting to mongo 
/* Note :- 
prashantDB is the name of database 
and if it not present in mongo then mongo will
automatically create this db 
*/
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

// reading data from mongo
async function getDocument(filter,callback=()=>{}){
    /*
    find() method take object argument as filter 
    and select() method selects the filed which you want to show 
    limit method limit() the number of result 
    coutnDocuments() method returns the count of documents
    sort(criteria) method returns the sorted document 
    1 for accending order
    */
    const result = await prashant.find(filter).select({name:1,active:2}).sort("name : 1");
    callback(result);
    // console.log(filter)
    // const result = await prashant.find(filter).select({name:1,active:2}).sort("name : 1");
    // callback(result);
}

// operators in mongo

// note :- every operators startes with $

/*
operator                syntax

gt(greater then) = {$get:value(int)}

lte(less then) = {$lte:value(int)}

$in(matches if the value exiest in the given array) = {$in:["string","string"]}

$nin (matches if the value not exiest in the given array) = {$nin:["string","string"]}
*/

async function updateDocument(_id,newvalue,callback=()=>{}){
    //findByIdAndUpdate() ,while using this method 
    //you should pass one opetion which is and new is used 
    //to get the updated value {new:true,useFindAndModify : false}   
    //updateOne() and updateMany()
    try {
        const result = await prashant.findByIdAndUpdate({_id},{
            $set: newvalue
        },{
            new : true,
            useFindAndModify : false
        });
        callback(result);
    } catch (error) {
        console.log(error);
    }

}

updateDocument("5fbfd7888d73532ba03c66bd",{active:false},(result)=>{
    console.log(result);
});



