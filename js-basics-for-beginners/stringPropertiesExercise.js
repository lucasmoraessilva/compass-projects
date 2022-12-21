function showStringProperties(obj){
    for(let property in obj){
        let propertyValue = obj[property];

        if(typeof(propertyValue) === 'string'){
            console.log(`${property} ${propertyValue}`)
        }
    }
}

const movie = {
    title: 'Grown Ups',
    releaseYear: 2010,
    rating: 4.8,
    director: 'Dennis Dugan'
}
showStringProperties(movie)