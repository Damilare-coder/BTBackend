import path from "path"

const filePath = "C:\Users\DAMMY\Desktop\BTBackend_proj\\server.js";

console.log("Full path:",filePath);

// Gets the last part in the above path
console.log("File name:",path.basename(filePath));

// Gets the directory containing it
console.log("Directory:",path.dirname(filePath));

// Gets the extension name 
console.log("Extension:",path.extname(filePath));

const joinedPath = path.join(
    "BTBackend_proj",
    "data",
    "users.json")

console.log(joinedPath);

const filepath = path.resolve(
    "BTBackend_proj",
    "data",
    "users.json")

console.log(filepath);

//Gets information about the path
const parsed = path.parse(filepath);

console.log(parsed);
