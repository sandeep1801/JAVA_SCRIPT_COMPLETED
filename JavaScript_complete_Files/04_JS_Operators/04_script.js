// Assignment operator =
let a = 10;
console.log(`Value of a ${a}`);

// Arithmetic operators + - * / , %
let num1 = 100;
let num2 = 200;
let addition = num1 + num2;
console.log(`Addition : ${addition}`);

let subtraction = num1 - num2;
console.log(`Subtraction : ${subtraction}`);

let multiplication = num1 * num2;
console.log(`Multiplication : ${multiplication}`);

let division = num1 / num2;
console.log(`Division : ${division}`);

// Even or Odd Numbers
let number = 100;
if(number % 2 === 0){
    console.log(`The ${number} is Even`);
}
else{
    console.log(`The ${number} is Odd`);
}

// Short hand math += , -= , *= , /=
a = 10;
let b = 20;
let sum = 0;
sum = sum + (a + b); // 0 + 10 + 20
sum += (a + b); // 30 + 10 + 20 = 60
console.log(`the Sum is : ${sum}`); // 60

// Conditional operators < , > , <= , >= , !=
let age = 15;
if(age >= 18){
    console.log('You are Major');
}
else{
    console.log('You are Minor');
}

// Unary Operator ++ , -- (pre , post)
let x = 10;
x = x - 1;
x -= 1;
x--;
console.log(x);

// Logical operators && , ||
let inRelation = true;
let parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon ');
}
else{
    console.log('Wait until parents Agreed');
}

// String Concatenation Operator
let empName = 'John';
let empAge = 40;
console.log(empName + " " + empAge); // Up to ES5
console.log(`${empName} ${empAge}`); // From ES6

// Ternary operator (? :)
age = 25;
let message = '';
(age >= 18) ? message = 'You are Major' : message = 'You are Minor';
console.log(message);

// Type of operator
let someVar = 'test';
console.log(`Value : ${someVar} Type : ${typeof  someVar}`);

// == operator
a = 10;
b = '10';
if(a == b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}

// === operator
a = 10;
b = '10';
if(a === b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}
