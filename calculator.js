function multiply(a,b){
    return a*b;
}

function division(a,b){
    if(b===0){
        throw new Error('Invalid inputs!')
    }
    return a/b;
}

function square(a){
    return a*a;
}

export { multiply, division, square };