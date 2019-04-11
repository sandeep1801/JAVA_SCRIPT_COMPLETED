// Get the Input Fields
let usernameElement = document.querySelector('#username');
let emailElement = document.querySelector('#email');
let passwordElement = document.querySelector('#password');
let confirmPasswordElement = document.querySelector('#password_confirm');

// Get the Error Message Elements
let userNameErrorElement = document.querySelector('#name_error');
let emailErrorElement = document.querySelector('#email_error');
let passwordErrorElement = document.querySelector('#password_error');
let message = '';

// Blur Events for All the Fields
// UserName
usernameElement.addEventListener('blur',function() {
    if(usernameElement.value !== ''){
        clearErrorMessage(usernameElement,userNameErrorElement);
    }
});

// Email
emailElement.addEventListener('blur',function() {
    if(emailElement.value !== ''){
        clearErrorMessage(emailElement,emailErrorElement);
    }
});

// Password
passwordElement.addEventListener('blur',function() {
    if(passwordElement.value !== ''){
        clearErrorMessage(passwordElement,passwordErrorElement);
        clearErrorMessage(confirmPasswordElement,passwordErrorElement);
    }
});

// Confirm Password
confirmPasswordElement.addEventListener('blur',function() {
    if(confirmPasswordElement.value !== ''){
        clearErrorMessage(passwordElement,passwordErrorElement);
        clearErrorMessage(confirmPasswordElement,passwordErrorElement);
    }
});

// Form Validation
let validate = () => {
    let isValid = true;

    // Required User Name Validation
    if(usernameElement.value === ''){
        message = 'UserName is Required';
        displayErrorMessage(usernameElement,userNameErrorElement,message);
        isValid = false;
        return false;
    }

    // UserName Length Validation
    if(usernameElement.value.length < 5){
        message = 'Enter at least 5 letters';
        displayErrorMessage(usernameElement,userNameErrorElement,message);
        isValid = false;
        return false;
    }

    // UserName RegExp Validation
    if(!usernameElement.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        message = 'Please Match the Pattern';
        displayErrorMessage(usernameElement,userNameErrorElement,message);
        isValid = false;
        return false;
    }

    // Required Email Validation
    if(emailElement.value === ''){
        message = 'Email is Required';
        displayErrorMessage(emailElement,emailErrorElement,message);
        isValid = false;
        return false;
    }

    // Required Password Validation
    if(passwordElement.value === ''){
        message = 'Password is Required';
        displayErrorMessage(passwordElement,passwordErrorElement,message);
        isValid = false;
        return false;
    }

    // Required Confirm Password Validation
    if(confirmPasswordElement.value === ''){
        message = 'Confirm Password is Required';
        displayErrorMessage(confirmPasswordElement,passwordErrorElement,message);
        isValid = false;
        return false;
    }

    // Password Match Validation
    if(passwordElement.value !== confirmPasswordElement.value){
        message = 'Both the passwords not Matched';
        displayErrorMessage(passwordElement,passwordErrorElement,message);
        displayErrorMessage(confirmPasswordElement,passwordErrorElement,message);
        isValid = false;
        return false;
    }

    if(isValid){
        alert('Form Submitted Successfully');
        return true;
    }
    else{
        return false;
    }
};


// display Error Message
let displayErrorMessage = (inputElement,errorElement,message) => {
    inputElement.style.backgroundColor = 'lightsalmon';
    inputElement.style.border = '1px solid red';
    inputElement.style.boxShadow = '0 0 10px red';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
};

// clear Error Messages
let clearErrorMessage = (inputElement,errorElement) => {
    inputElement.style.backgroundColor = 'lightgreen';
    inputElement.style.border = '1px solid green';
    inputElement.style.boxShadow = '0 0 10px green';
    errorElement.textContent = '';
};