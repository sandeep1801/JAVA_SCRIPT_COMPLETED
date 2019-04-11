let wishMe= (time) => {
    let message = '';
    if(time >= 0 && time <= 12){
        message = 'Good Morning'
    }
    else if(time >12 && time <= 17){
        message = 'Good Afternoon';
    }
    else if(time >17 && time <= 23){
        message = 'Good Evening';
    }
    else{
        message = 'Please enter proper time';
    }
    return message;
};

// Get the HTML element
let h2Tag = document.querySelector('h2');
let inputElement = document.querySelector('#time');
inputElement.addEventListener('keyup',function() {
    let timeValue = Number(inputElement.value);
    if(timeValue !== 0){
        let wishMsg = wishMe(timeValue);
        h2Tag.textContent = wishMsg;
    }else{
        h2Tag.textContent = '';
    }

});


