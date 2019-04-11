// creation of arrays
let numbers = [10,20,30,40,50];

// Accessing an array and its properties
console.log(numbers);
console.log(numbers[3]); // 40

// Access not existed property from an array
console.log(numbers[5]); // undefined

// Accessing length of an Array
console.log(`Array Length ${numbers.length}`);

// reverse the array using reverse()
numbers = [10,20,30,40,50];
console.log(numbers);
numbers.reverse();
console.log(numbers);

// Remove the first value of the array: shift()
numbers = [10,20,30,40,50];
console.log(numbers);
numbers.shift();
console.log(numbers);

// Add value to front of the array:unshift()
numbers = [10,20,30,40,50];
console.log(numbers);
numbers.unshift(60);
console.log(numbers);

// Remove the last value of the array: pop()
numbers = [10,20,30,40,50];
console.log(numbers);
numbers.pop();
console.log(numbers);

// Add value the end of the array: push()
numbers = [10,20,30,40,50];
console.log(numbers);
numbers.push(60);
console.log(numbers);

// Remove an element from an Array , Arguments: colors.splice(pos,n):
// splice(index)
numbers = [10,20,30,40,50];
console.log(numbers);
numbers.splice(1);
console.log(numbers);

// splice(index,no of elements)
numbers = [10,20,30,40,50];
console.log(numbers);
numbers.splice(1,2);
console.log(numbers);

// splice(index,1,replaceElement)
numbers = [10,20,30,40,50];
console.log(numbers);
numbers.splice(1,1,80);
console.log(numbers);

// Create a copy of an array. Typically assigned to a new variable:slice();
let array1 = [10,20,30,40];
let array2 = array1.slice();
array1.splice(2);
console.log(array2);

// indexOf()
array1 = [10,20,30,40];
console.log(array1.indexOf(10)); // 0

// join() , split()
let array = ['html','css','JavaScript','JQuery'];
console.log(array.join(' - '));
let theString = 'html - css - JavaScript - JQuery';
let newArray = theString.split(' - ');
console.log(newArray);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
