function Address(street,city,zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address1 = new Address('a','b',123);
let address2 = new Address('c','d',456);

function areEqual(addr1, addr2) {
    let isEqual = true;
    
    for(let key in addr1){
        if(addr1[key] !== addr2[key]){
            isEqual = false;
            break;
        }
    }

    return isEqual;
}

function areSame(addr1, addr2) {
    return addr1 === addr2;
}

console.log(areEqual(address1,address2));
console.log(areSame(address1,address2));