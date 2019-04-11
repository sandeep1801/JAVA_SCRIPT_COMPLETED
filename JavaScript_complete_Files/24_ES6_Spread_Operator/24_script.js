// Spread Operator

// Spread operator for insertion of array elements into another
let array1 = [10,20,30];
let array2 = [...array1, 40,50,60];
console.log(array2);

// Spread operator for creation of a copy of an Array
let arr1 = [10,20,30];
let arr2 = arr1.slice(); // creates a new copy
arr2 = [...arr1]; // spread operator
console.log(arr2);


// spread operator to pass an array elements to a function
let values = [45,30,78,54,84,161,651,981,6,51,61];
let min = values[0];
for(let index in values){
   if(values[index] <= min){
       min = values[index];
   }
}
console.log(min);

// Using Spread Operator
min = Math.min(...values);
console.log(`Min: ${min}`);
