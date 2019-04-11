// Student Object
let student = {
    name : 'Mahesh',
    age : 22,
    course : 'Engineering',
    address : {
        city:'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};

// Destructuring
let {name , age , course} = student;

console.log(`Name : ${name} Age : ${age} Course: ${course}`);

// Destructuring
let {address} = student;

console.log(`City: ${address.city} State : ${address.state} Country: ${address.country}`);