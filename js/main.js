let eye = document.getElementById('openPass');
let repeatEye = document.getElementById('openRepeatPass');
let inputPass = document.getElementById('passwordAuth');
let repeatPass = document.getElementById('passworRepeatdAuth');
eye.addEventListener('click', () => {
    if(inputPass.type === 'password') {
        inputPass.type = 'text';
        eye.src = './../image/openEye.svg';
    } else {
        inputPass.type = 'password';
        eye.src = './../image/close__eye.svg';
    }
});
repeatEye.addEventListener('click', () => {
    if(repeatPass.type === 'password') {
        repeatPass.type = 'text';
        repeatEye.src = './../image/openEye.svg';
    } else {
        repeatPass.type = 'password';
        repeatEye.src = './../image/close__eye.svg';
    }
});

let checkForRegister = document.getElementById('checkPolitical');
let registerBtn = document.querySelector('.auth__form.register button.auth__btn');
checkForRegister.addEventListener('click', () => {
    (checkForRegister.checked) ? registerBtn.disabled = false : registerBtn.disabled = true;
});
console.log(registerBtn);
console.log(checkForRegister.checked);