import fs from "fs"

fs.writeFileSync("user.txt","Name:Damilare-coder\n")
fs.appendFileSync("user.txt","Role:Backend Developer\n")


// console.log(readUser);
fs.appendFileSync("user.txt", "Status: Learning NodeJS\n")

const readUser = fs.readFileSync("user.txt", "utf8")

console.log(readUser);