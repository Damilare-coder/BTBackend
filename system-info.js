import os from "os"

console.log("====== SYSTEM INFORMATION ======");

console.log("Platform:", os.platform());
console.log("Arch:", os.arch());
console.log("Hostname:", os.hostname());
console.log("Home Directory:", os.homedir());
console.log("Temporary Directory:", os.tmpdir());
console.log("CPU Cores:", os.cpus().length);

const totalMem = os.totalmem();

console.log("Total memory:",
    (totalMem /1024 /1024 /1024).toFixed(2),
    "GB"
)


const freeMem = os.freemem();

console.log("Free memory:",
    (freeMem /1024 /1024 /1024).toFixed(2),
    "GB"
)

console.log(os.uptime());
