function calculateGrade(marks) {
    let average = marks.reduce((acc, value) => acc += value) / marks.length;

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