let employees = [];

// Get the Form Tag
let htmlForm = document.querySelector('#register-form');
// Apply a Submit Event for the Form
htmlForm.addEventListener('submit',function(e) {
    // To Prevent the Actual Form submission
    e.preventDefault();
   let employeeName = document.querySelector('#emp_name').value;
   let employeeEmail = document.querySelector('#emp_email').value;
   let employeeDesg = document.querySelector('#emp_desg').value;
   let companyName = document.querySelector('#emp_company').value;
   let employee = {
       employeeName : employeeName,
       employeeEmail : employeeEmail,
       employeeDesg : employeeDesg,
       companyName : companyName
   };
   // validate the Form
   let isValid = validateForm(employee);
   if(isValid){
       employees.push(employee);
       clearFormFields();
       displayEmployeeData();
   }
});

// Clear the Form Fields
let clearFormFields = () => {
    document.querySelector('#emp_name').value = '';
    document.querySelector('#emp_email').value = '';
    document.querySelector('#emp_desg').value = '';
    document.querySelector('#emp_company').value = '';
    removeColors('#emp_name');
    removeColors('#emp_email');
    removeColors('#emp_desg');
    removeColors('#emp_company');
};

// Display Employee Data
let displayEmployeeData = () => {
    let tableBody = document.querySelector('#table_body');
    let tempTableRow = '';
    let count = 1000;
    for(let employee of employees) {
        tempTableRow += `<tr>
                            <td>${count + 1}</td>
                            <td>${employee.employeeName}</td>
                            <td>${employee.employeeEmail}</td>
                            <td>${employee.employeeDesg}</td>
                            <td>${employee.companyName}</td>
                            <td>
                            <a href="#"><i class="fa fa-times-circle delete"></i></a>
                            </td>
                         </tr> \n`;
        count++;
    }
    tableBody.innerHTML = tempTableRow;
};

// Delete Functionality
let tableBody = document.querySelector('#table_body');
tableBody.addEventListener('click',function(e) {
    let targetElement = e.target; // to get the target element
    if(targetElement.classList.contains('delete')){
       targetElement.parentElement.parentElement.parentElement.remove();
    }
});

// Form Validation Logic
let validateForm = (employee) => {
    return (validateEmployeeName(employee) &&
            validateEmployeeEmail(employee) &&
            validateEmployeeDesignation(employee) &&
            validateCompany(employee));
};

// let validateEmployeeName
let validateEmployeeName = (employee) => {
    if(employee.employeeName === ''){
        applyColors('#emp_name');
        return false;
    }
    else{
        removeColors('#emp_name');
        return true;
    }
};

// let validateEmployeeName
let validateEmployeeEmail = (employee) => {
    if(employee.employeeEmail === ''){
        applyColors('#emp_email');
        return false;
    }
    else{
        removeColors('#emp_email');
        return true;
    }
};

// let validateEmployeeDesignation
let validateEmployeeDesignation = (employee) => {
    if(employee.employeeDesg === ''){
        applyColors('#emp_desg');
        return false;
    }
    else{
        removeColors('#emp_desg');
        return true;
    }
};

// let validateCompany
let validateCompany = (employee) => {
    if(employee.companyName === ''){
        applyColors('#emp_company');
        return false;
    }
    else{
        removeColors('#emp_company');
        return true;
    }
};

// ApplyColors
let applyColors = (elementSelector) => {
    document.querySelector(elementSelector).style.border = '1px solid orangered';
    document.querySelector(elementSelector).style.backgroundColor = '#f7c6b3';
    document.querySelector(elementSelector).style.boxShadow = '0 0 10px red';
};

// removeColors
let removeColors = (elementSelector) => {
    document.querySelector(elementSelector).style.border = 'none';
    document.querySelector(elementSelector).style.backgroundColor = 'white';
    document.querySelector(elementSelector).style.boxShadow = '0 0 0px white';
};

