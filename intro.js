
    // const name = "Damilare";
    // let age = 22;
    // let prog = "JavaScript"

    // console.log(`My name is ` + `${name}, I'm ${age}years old and my favorite programming language is ${prog}.`);

    // console.log(process.argv);

    // const name = process.argv[2];

    // console.log(`Hello, ${name}`);
    

// In intro.js, create a program that accepts:

// node intro.js Damilare 25

// and produces:

// My name is Damilare and I am 25 years old.

const name = process.argv[2]
const age = process.argv[3]

console.log(`My name is ${name}, and I am ${age} years old`);
