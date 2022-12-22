function getMax(array) {
    if(array.length > 0) {
        return array.reduce((acc, currentValue) => {
            return (currentValue > acc) ? currentValue : acc;
        });
    }
}

const numbers = [1,5,2,3,4,9];
const max = getMax(numbers);
console.log(max)