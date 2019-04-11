// Get the HTML Elements
let textBox = document.querySelector('#user');
let h3Tag = document.querySelector('#span');
textBox.addEventListener('keyup',function() {
    let textEntered = textBox.value;
    h3Tag.textContent = textEntered;
    if(textEntered === 'Rajan'){
        applyColors('green','lightgreen');
    }
    else{
        applyColors('red','lightsalmon');
    }
});

let applyColors = (color,bgColor) => {
    textBox.style.border = `2px solid ${color}`;
    textBox.style.boxShadow = `0 0 10px ${color}`;
    textBox.style.backgroundColor = bgColor;
};

// Change color on Length
let inputField = document.querySelector('#text');
let spanTag = document.querySelector('#len');
inputField.addEventListener('keyup',function() {
   let textLength = inputField.value.length;
    spanTag.textContent = textLength;
    // for Even Number
    if(textLength %2 === 0){
        changeColor('green');
    }
    // Odd Number
    else{
        changeColor('blue');
    }
});

let changeColor = (color) => {
    inputField.style.border = `2px solid ${color}`;
    inputField.style.backgroundColor = color;
    inputField.style.color = 'white';
    inputField.style.boxShadow = `0 0 10px ${color}`;
};