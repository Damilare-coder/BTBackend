import path from "path"

const filePath = "C:\Users\DAMMY\Desktop\BTBackend_proj\\server.js";

console.log("Full path:",filePath);

// Gets the last part in the above path
console.log("File name:",path.basename(filePath));

// Gets the directory containing it
console.log("Directory:",path.dirname(filePath));

// Gets the extension name 
console.log("Extension:",path.extname(filePath));

// combines the pieces, and makes a relative path.
const joinedPath = path.join(
    "BTBackend_proj",
    "data",
    "users.json")

console.log(joinedPath);


// gets the absolute path
const filepath = path.resolve(
    "BTBackend_proj",
    "data",
    "users.json")

console.log(filepath);


//Gets information about the path
const parsed = path.parse(filepath);

console.log(parsed);
