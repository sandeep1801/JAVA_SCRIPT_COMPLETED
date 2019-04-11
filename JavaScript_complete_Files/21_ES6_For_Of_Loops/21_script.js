let technologies = ['html','css','javascript','bootstrap'];

// for - in loop ES5
let output = '';
for(let index in technologies){
    output += `${index} `;
}
console.log(output);

// for - of loop ES6
output = '';
for(let element of technologies){
    output += `${element.toUpperCase()} `;
}
console.log(output);