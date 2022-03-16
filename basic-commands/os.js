const os = require('os');
console.log("Total RAM available" , os.totalmem() / Math.pow(1024, 3));
console.log("Free RAM available" , os.freemem() / Math.pow(1024, 3));
console.log("Os version" , os.version());
console.log("Os CPUS" , os.cpus());