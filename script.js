let form = document.querySelector('form');
let pass1 = document.querySelector('#pass1');
let pass2 = document.querySelector('#pass2');
let errMsg = document.querySelector('.err-msg');

form.addEventListener('submit', e =>{
    if (pass1.value !== pass2.value) {
        e.preventDefault();
        errMsg.style.display = 'block';
    }
})

