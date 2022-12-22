function except(array, excluded) {
    let output = [];

    array.forEach(value => {
        if(!(excluded.includes(value))){
            output.push(value);
        }
    });

    return output;
}

let numbers = [1,2,3,4,1,1,1]

let output = except(numbers, [1,2]);
console.log(output);