import os from "os"

console.log(os.platform());

console.log(os.arch());

console.log(os.hostname());

console.log(os.homedir());

console.log(os.tmpdir());


const totalMem = os.totalmem();

console.log(
    "Total Memory:",
    (totalMem / 1024 / 1024 / 1024).toFixed(2),
    "GB"
);


const freeMemory = os.freemem();

console.log(
    "Free memory:",
    (freeMemory / 1024 / 1024 / 1024).toFixed(2),
    "GB"
);

//gives us information about the logical CPUs available to the operating system
console.log(os.cpus().length);

console.log(os.uptime());
