//var -> supports only function scoping non fixed variables
//let -> block , function scoping for non fixed variables
//const -> block , function scoping but for fixed variables

// var vs let with if condition
let course = 'Engineering';
if(course === 'Engineering'){
    let dept1 = 'Software';
    var dept2 = 'govt';
}
console.log(course);
//console.log(dept1); // ReferenceError: dept1 is not defined
console.log(dept2);

// var vs let with for loop
for(let i=0; i<=10; i++){

}
// console.log(i); // ReferenceError: i is not defined
for(var i=0; i<=10; i++){

}
console.log(i); // 11

// let vs const
let name1 = 'John';
const name2 = 'Rajan';
name1 = 'Changed'; // Possible
//name2 = 'Changed'; // TypeError: Assignment to constant variable.


// const with an Object
const mobile = {
    brand : 'Apple',
    color : 'silver',
    price : 35000
};
console.log(mobile);
mobile.brand = 'Lenovo';
console.log(mobile);
