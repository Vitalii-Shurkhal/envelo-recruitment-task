
const modal = document.querySelector('#simpleModal');
const finishBtn = document.querySelector('#finishBtn');
const pickUpNextBtn = document.querySelector('#pickUpNextBtn');

function openModal() {
    modal.style.display = 'block';
    submitBtn.value = 'Odbierz paczkę'
}

function closeModal() {
    modal.style.display = 'none';
}
