const fs = require('fs')

/*
callbacks are function which we pass in fucntion as a argument
callback means when your work is done then call me 

almost all asycronus functions have callbacks arguments

we pass them a function as an argument - a callback -
that gets called when that task completes.
The callback has an argument that tells you whether 
the operation completed successfully
Now we need to say what to do when fs.writeFlie
has completed (even if it's nothing) , and start 
checking for errors

MOTIVE BEHIDE THE CALLBACKS IN ASYCRONUS FUNCTIONS :

when the function may be stoped by some error so that time 
what he do ,is he terminate for heandle that error ,if 
that fucntion handle the error then how he could handle 
that error    

*/

// fs.writeFile('testing.txt','today(17/11/2020) i stared node ',
// (error) =>{
//     console.log(error)
// })

// fs.appendFile('testing.txt','today(18/11/2020) the second day of node ',
// (error) =>{
//     console.log(error)
// })

fs.readFile('testing.txt','UTF-8',(error,data) =>{
    console.log(data)
})





