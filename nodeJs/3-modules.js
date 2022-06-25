// Modules
//node uses commonjs every file is a module (by defaulr)

const names = require('./4-names')
const sayHi = require('./5-utilis')
const data = require('./6-alt')
require('./7-diff')
console.log(data);

console.log(names);


sayHi("susan")
sayHi(names.peter)
sayHi(names.john)


//os module
const os = require('os');

//info about current user
const user = os.userInfo()
//returns syatem uptime in seconds

console.log(os.uptime());

console.log(user);

const currentOS = {
    name:os.type(),
    release:os.release(),
    freeMem:os.freemem()
}

console.log(currentOS);