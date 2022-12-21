function sum(...values) {
    if(!(Array.isArray(values[0]))){
        return values.reduce((acc, value) => acc += value)
    }

    return values[0].reduce((acc, value) => acc += value)
}

console.log(sum(1,2,3,4))