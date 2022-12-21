function isPrime(number) {
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            return false;
        }
    }

    return true;
}

function showPrimes(limit) {
    for(let possiblePrime = 2; possiblePrime <= limit; possiblePrime++){
        if(isPrime(possiblePrime)){
            console.log(possiblePrime)
        }
    }
}

showPrimes(30)