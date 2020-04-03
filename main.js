const btn = document.querySelector('#submit');
const myForm = document.querySelector('#survey-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const desc = document.querySelector('#description');
const newDesc = document.querySelector('#new-description');
const nameError = document.querySelector('#name-error');
const mailError = document.querySelector('#mail-error');
const radioError = document.querySelector('#radio-error');
const radio = document.querySelector('#radio');



btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    btn.style.background = 'orange';
});

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    btn.style.background = 'lawngreen';
});

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    const userReason = document.querySelector('input[name="user-reason"]:checked');
    if (nameInput.value === ''|| emailInput.value === '' || userReason == null) {
        if (nameInput.value === '') {
            nameError.innerHTML = 'please provide your name'
            nameInput.addEventListener("click", () => nameError.remove());
        } 
        if (emailInput.value === '') {
            mailError.innerHTML = 'please provide your email address'}
            emailInput.addEventListener("click", () => mailError.remove());
        if (userReason === null) {
            radioError.innerHTML = 'please choose an option'
            radio.addEventListener("click", () => radioError.remove());
        }
    } else if (userReason.value ==='work') {
        myForm.remove();
        desc.remove();
        newDesc.innerHTML = `Thank you ${nameInput.value}, I will review your application and send a personalised offer to your email addres - ${emailInput.value} and soon you'll be able to boost your career!`
    } else if (userReason.value ==='exam'){
        myForm.remove();
        desc.remove();
        newDesc.innerHTML = `Thank you ${nameInput.value}! <br> I will review your application and send a personalised offer to your email addres - ${emailInput.value} and soon you'll be able to pass your exam!`
    } else if (userReason.value === 'speaking'){
        myForm.remove();
        desc.remove();
        newDesc.innerHTML = `Thank you ${nameInput.value}, I will review your application and send a personalised offer to your email addres - ${emailInput.value} and soon you'll be speaking with confidence!`
    }
}