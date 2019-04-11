// JavaScript Functions

// 1) JS Function without parameters / arguments
function greet() {
    console.log('Good Morning');
}
greet();

// 2) JS Function with Arguments / parameters
function greetArgs(name) {
    console.log(`Good Morning ${name}`);
}
greetArgs('John');
greetArgs('Wilson');

// 3) JS Function with less arguments / parameters
function greetLessArgs(name,age) {
    console.log(`Hello ${name} You are ${age} yrs Old`);
}
greetLessArgs('John',40);
greetLessArgs('John',40,'Manager');

// 4) JS Function with return type
function greetReturn(name,age) {
    let result = `Hello ${name} You are ${age} yrs Old`;
    return result;
}
let message = greetReturn('Rajan',25);
console.log(message);

// 5) JS Function Expression
let greetExp = function(name) {
    console.log(`Hello ${name} Iam from Function Expression`);
};
greetExp('John');

// 6) JS function with an Object as a parameter
let printPerson = function(obj) {
    console.log(`Name : ${obj.name} Age : ${obj.age} Course : ${obj.course}`);
};
let person = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering'
};
printPerson(person);

// 7) JS Function with an Array as a parameter
let technologies = ['html','css','javascript','jquery'];
let printArray = function(array) {
    for(let element of array){
        console.log(element);
    }
};
printArray(technologies);

// 8) JS Function with a function a parameter
let greet1 = function() {
    console.log('Iam from greet1');
};
let greet2 = function() {
  console.log('Iam from greet2');
};
let greetCaller = function(fName) {
     fName();
};
greetCaller(greet2);

// 9) JS Function inside an Object this
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(student.fullName());

// 10) JS Function inside a nested Object
let employee = {
    name : 'John',
    age : 40,
    designation : 'Manager',
    address : {
        city : 'Hyderabad',
         state : 'TS',
         country : 'India'
    },
    isFromCity : function(city) {
        return city === this.address.city;
    },
    isFromState : function(state) {
        return state === this.address.state;
    },
    isFromCountry : function(country) {
        return country === this.address.country;
    }
};
console.log(`Is John From HYD ? ${employee.isFromCity('Hyderabad')}`);
console.log(`Is John From TS ? ${employee.isFromState('TS')}`);
console.log(`Is John From India ? ${employee.isFromCountry('India')}`);

// 11) Arrow Functions ES6
let sum = (a , b) => {
    let addition = a + b;
    return addition;
};
console.log(`The Sum of a , b is : ${sum(10,20)}`);

// 12) Callback Functions

