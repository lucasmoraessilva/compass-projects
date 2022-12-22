function includes(array, searchElement) {
    let isIn = false;

    for(let element of array){
        if (element === searchElement){
            isIn = true;
            break;
        }
    }

    return isIn;
}

let numbers = [1,2,3,4];
console.log(includes(numbers, 2));