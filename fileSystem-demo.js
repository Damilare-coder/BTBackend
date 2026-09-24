
import fs from "fs";

fs.writeFileSync("message.txt","First message")

fs.writeFileSync("message.txt","Second message")

//writeFileSync() replaces the existing content. It doesn't append to it.

// reading the created file using redFileSync(); it takes in two parameters--the file name and the format. Without format, node returns buffers and not human-readable result.
const data = fs.readFileSync("message.txt", "utf8")


//Updating the file

// appendFileSync() adds to the file
console.log(data)

fs.writeFileSync("message.txt", "First message\n");

fs.appendFileSync("message.txt", "Second message\n");

fs.appendFileSync("message.txt", "Third message\n");

const dataa = fs.readFileSync("message.txt", "utf8");

console.log(dataa);



