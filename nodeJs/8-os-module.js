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
