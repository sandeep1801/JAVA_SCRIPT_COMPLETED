// Create a Empty Object
let fridge = {};
fridge.veg = 'Tomotos';
fridge.eggs = 20;
console.log(fridge);

// Object Literal
let mobile = {
    brand : 'Apple',
    color : 'Silver',
    RAM : '16GB',
    price : 35000,
    isInsured :false
};
console.log(mobile);

// Access the properties of an Object
console.log(`Mobile Brand : ${mobile.brand}`);

// [] notation
console.log(`Mobile Brand : ${mobile['brand']}`);

// Access Non Existing Property
console.log(mobile.memory);

// Nested Object
let student = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};

console.log(student);

// Add property to an Object
student.college = 'IIT Mumbai';
console.log(student);

// Add Property to a Nested Object
student.address.street = 'Ameerpet';
console.log(student);

// Delete an Object
delete student.address;
console.log(student);

