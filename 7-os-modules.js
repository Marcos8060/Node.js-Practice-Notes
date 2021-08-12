const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

// method returning the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

// finer os details
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemL: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS);