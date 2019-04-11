// Change to Text Box
let passwordBox = document.querySelector('#password');
let checkBox = document.querySelector('#check');
checkBox.addEventListener('change',function() {
    let attr = passwordBox.getAttribute('type');
    if(attr === 'password'){
        passwordBox.setAttribute('type','text');
    }
    else{
        passwordBox.setAttribute('type','password');
    }
});

// Select box with Options from Array
let selectBox = document.querySelector('#select');
let technologies = ['HTML','CSS','JavaScript','JQuery','Bootstrap'];
let options = '';
for(let elem of technologies){
    options += `<option>${elem}</option>`
}
selectBox.innerHTML = options;