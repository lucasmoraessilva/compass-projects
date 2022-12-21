function eveOrOdd(limit) {
    for(let number = 0; number <= limit; number++){
        let result = (number % 2) === 0 ? 'EVEN' : 'ODD'
        console.log(`${number} "${result}"`)
    }
}

eveOrOdd(10)