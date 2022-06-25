// Modules
//node uses commonjs every file is a module (by defaulr)

const names = require('./4-names')
const sayHi = require('./5-utilis')
console.log(names);


sayHi("susan")
sayHi(names.peter)
sayHi(names.john)


