let employees = [
    {
        name : 'John',
        age : 40,
        designation : 'Manager',
        salary : '1,50,000',
        active : true
    },
    {
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        salary : '30,000',
        active : true
    },
    {
        name : 'Wilson',
        age : 45,
        designation : 'Sr.Manager',
        salary : '2,30,000',
        active : false
    },
    {
        name : 'Haran',
        age : 22,
        designation : 'Trainee',
        salary : '20,000',
        active : false
    }
];







let seniorEmployees = employees.filter((employee) => {
    return employee.age >= 40;
});


let juniorEmployees = employees.filter((employee) => {
    return employee.age < 40;
});




let tBody = document.querySelector('#t_body');

// All Employees
let allEmpBtn = document.querySelector('#all-emp');
allEmpBtn.addEventListener('click',function() {
    displayEmployees(employees);
});

// Active Employees
let activeEmpBtn = document.querySelector('#active-emp');
activeEmpBtn.addEventListener('click',function() {
    let activeEmployees = employees.filter( (employee) => {
        return employee.active;
    });
    displayEmployees(activeEmployees);
});

// InActive Employees
let inActiveEmpBtn = document.querySelector('#inActive-emp');
inActiveEmpBtn.addEventListener('click',function() {
    let inActiveEmployees = employees.filter((employee) => {
        return !employee.active;
    });
    displayEmployees(inActiveEmployees);
});

// Display Employee Data
let displayEmployees = (employees) => {
    let tableRow = '';
    let count = 1;
    for(let employee of employees){
        tableRow += `<tr>
                        <td>${count}</td>
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.designation}</td>
                        <td>${employee.salary}</td>
                        <td>${employee.active}</td>
                     </tr> \n`;
        count++;
    }
    tBody.innerHTML = tableRow;
};

