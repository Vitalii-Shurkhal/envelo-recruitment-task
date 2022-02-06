

//Frist task view 
const startSection = document.querySelector('#start');
const startBtn = document.querySelector('#startBtn');

// Second tast view  
const form = document.forms[0];
const pickUpSection = document.querySelector('#pickUp');
const submitBtn = document.querySelector('#submitBtn');
const phoneNumberInput = document.querySelector('#phoneInput');
const errorPhoneNumber = document.querySelector('#phoneError');
const passCodeInput = document.querySelector('#passCode');
const passcodeError = document.querySelector('#passcodeError');


// OnClick  event wich hide first  view and show second 
startBtn.addEventListener('click', () => {
    startSection.setAttribute('hidden', false);
    pickUpSection.removeAttribute('hidden');
    submitBtn.disabled = 'true';
})

// Next 3 function with OnBlur and Onfocus events help user to enter coreect datd 
const showError = (errorElement, message) => {
    errorElement.style.display = 'block';
    errorElement.innerText = message;
}

function hideError(errorElement) {
    errorElement.style.display = 'none';
}

function showErrorMessage(event, inputName) {

    const emptyField = 'Pole nie moze byc puste';
    const wrongNumber = 'Podaj prawidłowy numer';
    const wrongPassCode = 'Podaj prawidłowe hało';

    if (inputName === 'phoneNumber') {
        if (event.target.value === '') {

            showError(errorPhoneNumber, emptyField);

        } else if (event.target.value.length < 9) {

            showError(errorPhoneNumber, wrongNumber);
        }
    }

    if (inputName === 'pickupCode') {
        if (event.target.value.length === 0) {

            showError(passcodeError, emptyField);

        } else if (event.target.value.length < 4) {

            showError(passcodeError, wrongPassCode);
        }
    }

}

phoneNumberInput.addEventListener('blur', (event) => {
    showErrorMessage(event, event.target.name);
})

passCodeInput.addEventListener('blur', (event) => {
    showErrorMessage(event, event.target.name);
})

phoneNumberInput.addEventListener('focus', () => {
    hideError(errorPhoneNumber);
})
passCodeInput.addEventListener('focus', () => {
    hideError(passcodeError);
})


// Enable Submit button if data is valid
form.addEventListener('keyup', (event) => {
    if (phoneNumberInput.value.length === 9 && passCodeInput.value.length === 4) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
})

// Confirm pickUp shipment in modal window 
submitBtn.addEventListener('click', function () {
    submitBtn.value = 'Jeszcze chwila...';
    setTimeout(openModal, 1500);
});

// don't allow to reload the page and reset form 
form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
})

// redirect to First task view 
finishBtn.addEventListener('click', () => {
    pickUpSection.setAttribute('hidden', null);
    startSection.removeAttribute('hidden');
    closeModal();
})

// redirect to Second task view 
pickUpNextBtn.addEventListener('click', (event) => {
    submitBtn.disabled = 'true';
    let rundomTimer = Math.floor(Math.random() * 1000);
    setTimeout(closeModal, rundomTimer);
})


