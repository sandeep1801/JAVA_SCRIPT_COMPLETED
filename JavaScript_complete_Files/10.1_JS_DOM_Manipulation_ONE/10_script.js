let h2Tag = document.querySelector('#msg');
// Display Wish Message
let displayWishMessage = (color,message) => {
    h2Tag.style.backgroundColor = color;
    h2Tag.style.textAlign = 'center';
    h2Tag.style.color = 'white';
    h2Tag.style.padding = '10px';
    h2Tag.style.boxShadow = '0 0 10px black';
    h2Tag.textContent = message;
};

// JavaScript Event Listeners
let h2Element = document.querySelector('#wish');

// good Morning Button
let GMButton = document.querySelector('#gm');
GMButton.addEventListener('click',function() {
    getWishMessage('green','Good Morning');
});

// good Afternoon Button
let GAButton = document.querySelector('#ga');
GAButton.addEventListener('click',function() {
    getWishMessage('blue','Good Afternoon');
});

// good Evening Button
let GEButton = document.querySelector('#ge');
GEButton.addEventListener('click',function() {
    getWishMessage('orangered','Good Evening');
});

// good Night Button
let GNButton = document.querySelector('#gn');
GNButton.addEventListener('click',function() {
    getWishMessage('purple','Good Night');
});

let getWishMessage = (color,message) => {
    h2Element.style.backgroundColor = color;
    h2Element.style.textAlign = 'center';
    h2Element.style.color = 'white';
    h2Element.style.padding = '10px';
    h2Element.style.boxShadow = '0 0 10px black';
    h2Element.textContent = message;
};


// Change Image
let imageTag = document.querySelector('#image');
let changeImage = () => {
    imageTag.setAttribute('src','../img/image7.jpeg');
    imageTag.style.border = '5px solid white';
};


