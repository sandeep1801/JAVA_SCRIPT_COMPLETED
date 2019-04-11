let dept = 'Engineering';
let job;
if(dept === 'Engineering'){
    job = 'Software';
}
console.log(job);

// Nested Functions Scopes
let a = 10;
let outerFn = () => {
    let a = 20;
    let innerFn = () => {
        let a = 30;
        console.log(a); // 30
    };
    innerFn();
    console.log(a); // 20
};
outerFn();
console.log(a); // 10

// Closures in JavaScript

let wish = () => {
    let msg = "Good Morning ";
    let abc = () => {
        console.log('Iam from abc function');
    };
    return abc;
};
let greet = wish();
greet();

// Closures in JavaScript
a = 10;
let outerFn1 = () => {
    let b = 20;
    let innerFn1 = () => {
        let c = 30;
        console.log(a);
        console.log(b);
        console.log(c);
    };
    return innerFn1;
};
let greeter = (fName) => {
    fName();
};
let ifn = outerFn1();
greeter(ifn);



