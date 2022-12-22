function addressFactory(street,city,zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

function Address(street,city,zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

console.log(addressFactory('a','b',123));
console.log(new Address('c','d',456));