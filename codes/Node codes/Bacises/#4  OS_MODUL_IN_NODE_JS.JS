//os module provides os utiliy function
const os = require('os')

console.log(os.arch()) //return the architecure of os
console.log(os.hostname())
console.log(os.platform())
console.log(os.tmpdir())
console.log(os.userInfo()['username'])
console.log(os.type())

// const freemory = os.freemem();
// console.log(`${freemory/1024/1024/1024}`)

// const freemory = os.totalmem();
// console.log(`${freemory/1024/1024/1024}`)


