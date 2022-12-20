function checkSpeed(speed){
    const speedLimit = 70;

    let speedDifference = (speed - speedLimit);

    if(speedDifference < 5){
        console.log('Ok');
    }
    else{
        let points = Math.floor(speedDifference / 5);

        if(points >= 12){
            console.log('License suspended');
        }
        else{
            console.log(points + ': points');
        }
    }
}

checkSpeed(130)