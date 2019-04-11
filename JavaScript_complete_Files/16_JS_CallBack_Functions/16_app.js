// Callback Functions
let a = () => {
    console.log('Iam from a Function');
};
let b = (fName) => {
    fName();
    console.log('Iam from b Function');
};
b(a);

// Actual Example
let sum = (a , b) => {
    return a + b;
};

let mul = (a , b) => {
    return a * b;
};

let calculate = (a , b , callback) => {
    return callback(a , b);
};
console.log(calculate(10,20,sum));
console.log(calculate(10,20,mul));
console.log(calculate(10,20,(a ,b) => { return a / b}));

// Callback Functions
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
console.log(employees);

// Senior Employees
let seniorEmployees = employees.filter((employee) => {
    return employee.age >= 35;
});
console.log(seniorEmployees);

// Junior Employees
let juniorEmployees = employees.filter((employee) => {
    return employee .age < 35;
});
console.log(juniorEmployees);

// Active employees
let activeEmployees = employees.filter((employee) => {
    return employee.active;
});
console.log(activeEmployees);

// In Active Employees
let inActiveEmployees = employees.filter((employee) => {
    return !employee.active;
});
console.log(inActiveEmployees);

