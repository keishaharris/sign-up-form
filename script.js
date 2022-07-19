const form =document.querySelector('form');
const pass1 = document.querySselector('#pass1');
const pass2 = document.querySelector('#pass2');
const errMsg = document.querySelector('.err-msg');

form.addEventListener('submit', e =>{
    e.preventDefault();
    if (pass1 !== pass2) {
        err.msg.style.display = 'block';
    }
})

