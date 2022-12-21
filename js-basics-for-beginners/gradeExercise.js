function calculateArrayAverage(array) {
    return array.reduce((acc, value) => acc += value) / array.length;
}

function calculateGrade(marks) {
    let average = calculateArrayAverage(marks);

    if(average <= 59){
        return 'E';
    }

    if(average <= 69){
        return 'D';
    }
    
    if(average <= 79){
        return 'C';
    }
    
    if(average <= 89){
        return 'B';
    }
    
    return 'A';
}

const marks = [80,80,50]
console.log(calculateGrade(marks))