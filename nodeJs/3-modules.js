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



//path