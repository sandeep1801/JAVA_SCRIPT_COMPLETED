// Get the HTML Elements
let clapSound = document.querySelector('#clap-sound');
let congratsSound = document.querySelector('#congrats-sound');
let originalTextElement = document.querySelector('#original-text');
let textAreaBox = document.querySelector('#text-area');
let textAreaBorder = document.querySelector('#text-area');
let minutesElement = document.querySelector('#minutes');
let secondsElement = document.querySelector('#seconds');
let resetButton = document.querySelector('#reset');
let congratsElement = document.querySelector('.cong-section');
let textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa,',
    'deleniti fugit labore laudantium nobis odit porro praesentium quasi quia sapiente ',
    'sed suscipit tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi',
    'cumque doloremque eligendi, facere obcaecati optio perferendis voluptatum. ',
    'Accusamus accusantium ad, assumenda, eius et fugiat inventore ipsam maxime minima ',
    'minus nesciunt optio provident quisquam quod saepe sed suscipit totam. Accusantium',
    'consectetur dolorem ducimus earum iste laborum molestias porro tempora. A amet,',
    'animi, consectetur cumque dolore exercitationem explicabo ipsa iure maiores odit',
    'perspiciatis provident quisquam quod ratione repellendus saepe tempora vel veniam ',
    'quisquam quod ratione repellendus saepe tempora vel veniam voluptas voluptatum! Labore obcaecati sequi veniam.',
    'tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi cumque doloremque eligendi'];

let timerRunning = false;
let timer = 0;
let minutes = 0;
let seconds = 0;
let interval = 0;

// Keyup event for textArea
textAreaBox.addEventListener('keyup',function() {
    // start Timer
    let textEnteredLength = textAreaBox.value.length;
    callTimer(textEnteredLength);
    let originalText = originalTextElement.textContent;
    let textEntered = textAreaBox.value;
    let partialText = originalText.substr(0,textEntered.length);
    evaluateText(originalText,textEntered,partialText);
});

// Click on Reset Button
resetButton.addEventListener('click',function() {
   clearInterval(interval); // stop timer
   resetFields(); // reset the fields
   textAreaBox.value = '';
   applyBgColor('gray');
   minutesElement.textContent = '00';
   secondsElement.textContent = '00';
   congratsElement.style.display = 'none';
   generateRandomString();
});

// evaluateText
let evaluateText = (originalText,textEntered,partialText) => {
    if(textEntered === ''){
        applyBgColor('gray');
    }
    else{
        if(textEntered === originalText){
            applyBgColor('seagreen');
            // Stop Timer
            clearInterval(interval);
            congratsElement.style.display = 'block';
            congratsSound.play();
        }
        else{
            if(textEntered === partialText){
                applyBgColor('lightblue');
            }
            else{
                applyBgColor('orangered');
                clapSound.play();
            }
        }
    }
};


// call Timer
let callTimer = (textlength) => {
    if(textlength === 1 && !timerRunning){
       interval = setInterval(startTimer,10);
       timerRunning = true;
    }
};

let startTimer = () => {
    timer++;

    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));

    minutesElement.textContent = leadingZero(minutes);
    secondsElement.textContent = leadingZero(seconds);

};

// leading Zero
let leadingZero = (time) => {
    if(time <= 9){
        return '0' + time
    }
    else{
        return time;
    }
};

// Apply BG Color
let applyBgColor = (color) => {
    textAreaBox.style.borderColor = color;
};

// resetFields
let resetFields = () => {
    timerRunning = false;
    timer = 0;
    minutes = 0;
    seconds = 0;
    interval = 0;
};

// Generate RandomString
let generateRandomString = () => {
    let randomNumber = Math.round(Math.random() * 10);
    let randomString = textArray[randomNumber];
    originalTextElement.textContent = randomString.trim();
};