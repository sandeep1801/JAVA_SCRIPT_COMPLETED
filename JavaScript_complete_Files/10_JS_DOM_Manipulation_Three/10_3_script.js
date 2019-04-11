// Get the HTML Elements
let textAreaBox = document.querySelector('#text-area');
let spanTag = document.querySelector('#span');
let maxLength = 100;
textAreaBox.addEventListener('keyup',function() {
   let textLength = textAreaBox.value.length;
   spanTag.textContent = (maxLength - textLength).toString();
});

// Change Event for Select Box
let selectBox = document.querySelector('#select');
let displayElement = document.querySelector('#option');
selectBox.addEventListener('change',function() {
    let selectedValue = selectBox.value;
    displayElement.textContent = selectedValue;
});
