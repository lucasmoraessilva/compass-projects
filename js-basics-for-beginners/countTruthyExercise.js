function countTruthy(array) {
    let counter = 0;

    for(let element of array){
        if (element){
            counter++;
        }
    }

    return counter;
}

const array = [1,2,0,null,undefined,'',' ',true];
console.log(countTruthy(array));