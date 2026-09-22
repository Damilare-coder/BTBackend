import path from "path"

const filePath = "C:\Users\DAMMY\Desktop\BTBackend_proj\\users.json"

console.log("Full path:",filePath);

console.log("Filename:",path.basename(filePath));

console.log("Directory:",path.dirname(filePath));

console.log("Extension:",path.extname(filePath));

const filepath = path.join("data","products.json")

console.log(filepath);


const resolvedFilePath = path.resolve("data","products.json")

console.log(resolvedFilePath);

const parsedFile = path.parse(filePath)

console.log(parsedFile);

