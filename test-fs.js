import fs from "fs"

fs.writeFileSync("testFile.txt","Hey! I'm just practising what I learnt yesterday\n")

fs.appendFileSync("testFile.txt","And I intend continuing today. This is appending to the content of this file using append\n")

const data = fs.readFileSync("testFile.txt","utf8")

console.log(data);

