// Normal Function
function greet1(name) {
    console.log(`Iam from Normal Function ${name}`);
}
greet1('John');

// Function Expression
let greet2 = function(name) {
    console.log(`Iam from Function Expression ${name}`);
};
greet2('John');

// Arrow Functions ES6
let greet3 = name => console.log(`Iam from Arrow Function ${name}`);
greet3('John');

// Sum Function
let sum =(a , b) => {
    return a + b;
};
console.log(`The Sum of 10 , 20 is : ${sum(10,20)}`);

// Arrow function for Array Filter
let employees = [
    {
        name : 'John',
        age : 40,
        designation : 'Manager',
        active : true
    },
    {
        name : 'Rajan',
        age : 23,
        designation : 'Software Engineer',
        active : false
    },
    {
        name : 'Mahesh',
        age : 22,
        designation : 'Trainee',
        active : true
    },
    {
        name : 'Wilson',
        age : 45,
        designation : 'Sr.Manager',
        active : false
    }
];

let activeEmployees = employees.filter(employee => employee.active);
console.log(activeEmployees);