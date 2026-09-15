function add(a,  b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Inputs must be numbers!');
    }
    return a + b;
}

function subtract(a, b){
    return a - b;
}

// console.log(add(9, 7));

export { add, subtract }; // Export object