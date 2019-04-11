// If Else condition Example
let time = -12;
if(time >= 0 && time <= 12){
    console.log('Good Morning');
}
else if(time > 12 && time <= 17){
    console.log('Good Afternoon');
}
else if(time >17  && time <= 23){
    console.log('Good Evening');
}
else{
    console.log('Enter a Proper Time Dude.');
}

// For loop to print the values 0 - 10 incre 1
let output = '';
for(let i = 0; i <= 10; i++){
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// For loop to print the values 20 - 0 decre 2
output = '';
for(let i = 20; i >= 0; i-=2){
    if(i >= 2){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// For loop to print the Numbers
output = '';
let theNumber = 9;
for(let i=1; i<= theNumber ; i++){
    for(j = 1; j <= i; j++){
        output += i;
    }
    output += '\n';
}
console.log(output);

// For loop to print reverse Numbers
output = '';
theNumber = 9;
for(let i = theNumber ; i >= 1; i--){
    for(j = 1 ; j <= i; j++){
        output += i;
    }
    output += '\n';
}
console.log(output);

// For Loop to print the sequence Numbers
output = '';
theNumber = 9;
for(let i=1; i <= theNumber; i++){
    for(j = 1; j<= i; j++){
        output += j;
    }
    output += '\n';
}
console.log(output);

// For Loop to print the REVERSE sequence Numbers
output = '';
theNumber = 9;
for(let i = theNumber ; i >= 1; i--){
    for(j = 1 ; j <= i; j++){
        output += j;
    }
    output += '\n';
}
console.log(output);

// While Loop to print 0 - 10 incre 1
console.log('---------------------- While Loop -------------');
output = '';
let i = 0;
while(i<= 10){
    if(i <= 9){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i++;
}
console.log(output);

// While loop to print the values 20 - 0 decre 2
output = '';
i = 20;
while(i >= 0){
    if(i >= 2){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i-=2
}
console.log(output);

// While loop to print the Numbers
output = '';
theNumber = 9;
i=1;
while(i<= theNumber){
    let j = 1;
    while(j <= i){
        output += i;
        j++;
    }
    output += '\n';
    i++
}
console.log(output);

// While loop to print reverse Numbers
output = '';
theNumber = 9;
i = theNumber;
while(i >= 1){
    let j = 1;
    while(j <= i){
        output += i;
        j++
    }
    output += '\n';
    i--;
}
console.log(output);

// While Loop to print the sequence Numbers
output = '';
theNumber = 9;
i=1;
while(i <= theNumber){
    let j = 1;
    while(j<= i){
        output += j;
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// While Loop to print the REVERSE sequence Numbers
output = '';
theNumber = 9;
i = theNumber;
while(i >= 1){
    let j = 1;
    while(j <= i){
        output += j;
        j++
    }
    output += '\n';
    i--;
}
console.log(output);

// Do - While Loop
console.log('------------------- Do While ------------');
// Do-while print from 0 - 10 incre 1
output = '';
i = 0;
do{
    if(i <= 9){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i++;
}
while(i<= 10);
console.log(output);

// Do-While loop to print the values 20 - 0 decre 2
output = '';
i = 20;
do{
    if(i >= 2){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i-=2;
}
while(i >= 0);
console.log(output);

// Do-While loop to print the Numbers
output = '';
theNumber = 9;
i=1;
do{
    let j = 1;
    do{
        output += i;
        j++;
    }
    while(j <= i);
    output += '\n';
    i++
}
while(i<= theNumber);
console.log(output);

// Do-While loop to print reverse Numbers
output = '';
theNumber = 9;
i = theNumber;
do{
    let j = 1;
    do{
        output += i;
        j++
    }
    while(j <= i);
    output += '\n';
    i--;
}
while(i >= 1);
console.log(output);

// While Loop to print the sequence Numbers
output = '';
theNumber = 9;
i=1;
do{
    let j = 1;
    do{
        output += j;
        j++;
    }
    while(j<= i);
    output += '\n';
    i++;
}
while(i <= theNumber);
console.log(output);

// While Loop to print the REVERSE sequence Numbers
output = '';
theNumber = 9;
i = theNumber;
do{
    let j = 1;
    do{
        output += j;
        j++
    }
    while(j <= i);
    output += '\n';
    i--;
}
while(i >= 1);
console.log(output);

// Switch Statement

console.log('---------------- switch statement ------------');

let today = new Date().getDay();
let fullDay = '';
switch(today){
    case 0:
        fullDay = 'Sunday';
        break;
    case 1:
        fullDay = 'Monday';
        break;
    case 2:
        fullDay = 'Tuesday';
        break;
    case 3:
        fullDay = 'Wednesday';
        break;
    case 4:
        fullDay = 'Thursday';
        break;
    case 5:
        fullDay = 'Friday';
        break;
    case 6:
        fullDay = 'Saturday';
        break;
    default:
        fullDay = '';
        break;
}
console.log(`Today is  : ${fullDay}`);