let circle = {
    radius: 2,
    get area(){
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2)
    }
}

console.log(circle.area)