function arrayFromRange(min, max) {
    let array = [];
    let i = min;

    do{
        array.push(i);
        i++;
    }
    while(i <= max)

    return array;
}

let numbers = arrayFromRange(-10,-4);
console.log(numbers)