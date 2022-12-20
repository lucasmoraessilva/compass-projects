function fizzBuzz(input) {
    if((typeof input) !== (typeof 1)){
        return 'Not a number';
    }

    if(((input % 3) === 0) && ((input % 5) === 0)){
        return 'FizzBuzz';
    }

    if((input % 3) === 0){
        return 'Fizz';
    }
    
    if((input % 5) === 0){
        return 'Buzz';
    }
    
    return input;
}

let fizzBuzzResult = fizzBuzz(15);
console.log(fizzBuzzResult);