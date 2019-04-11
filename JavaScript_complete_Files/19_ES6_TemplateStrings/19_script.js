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

// Get the Table Body
let tableBody = document.querySelector('#table_body');

// String Concatenation operator
let tempRow = '';
for(let employee of employees){
    tempRow += "<tr>" +
                    "<td>" + employee.name + "</td>" +
                    "<td>" + employee.age + "</td>" +
                    "<td>" + employee.designation + "</td>" +
                    "<td>" + employee.active + "</td>" +
               "</tr>"
}
// tableBody.innerHTML = tempRow;

// Template String
tempRow = '';
for(let employee of employees){
    tempRow += `<tr>
                    <td>${employee.name}</td>
                    <td>${employee.age}</td>
                    <td>${employee.designation}</td>
                    <td>${employee.active}</td>
               </tr>`;
}
tableBody.innerHTML = tempRow;

