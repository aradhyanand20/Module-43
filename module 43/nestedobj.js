// Write a function that takes an object representing a person as input and extracts the name and street properties from a nested object using object destructuring. The function should return an object with these two properties. A sample object is given below.

function extracrNameandStreet(person){
    const{ name, address:{streetname}} = person;
    return {name, streetname};
}
const person = { 
    name: 'Aradhya',
     address: { streetname: 'bus road', city: 'Noida', zip: '201301' }
};
console.log(extracrNameandStreet(person));
