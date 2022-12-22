function countOccurrences(array, searchElement){
    return array.reduce((acc, value) => {
        if(value === searchElement){
            return ++acc;
        }

        return acc;
    },0);
}

const numbers = [1,2,3,4,1,1];

const count = countOccurrences(numbers, 1);
console.log(count);