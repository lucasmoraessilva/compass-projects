function showStars(rows) {
    let a = '*';

    for(let i = 1; i <= rows; i++){
        console.log(a);
        a += '*';
    }
}

showStars(10);