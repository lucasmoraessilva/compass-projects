const numbers = [1,1,1,2,3,4];

function countOccurrences(array, element){
    if(!(Array.isArray(array))){
        throw new Error('Argumento inválido. Informe um array para realizar a contagem.')
    }

    return array.reduce((acc, value) => {
        const occurence = (value === element) ? 1 : 0;
        return acc + occurence
    });
}

try {
    const count = countOccurrences(null, 1);
    console.log(count);
} catch (error) {
    console.log(`Error: ${error.message}`)
}