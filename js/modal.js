const modalBtn = document.querySelector('.modal-btn');
const modalBtn2 = document.querySelector('.modal-btn-2');
const modalBtn3 = document.querySelector('.modal-btn-3');
const modalBtn4 = document.querySelector('.modal-btn-4');
const modalBtn5 = document.querySelector('.modal-btn-5');
const modalBtn6 = document.querySelector('.modal-btn-6');
const closeModal = document.querySelector('.close-modal');
const openModal = document.querySelector('.open-modal');
const overlayTwo = document.querySelector('.overlay-two');
// openbtn == modalbtn //

modalBtn.addEventListener('click', () => {
    overlayTwo.classList.add('active');
    openModal.classList.add('active');
});
modalBtn2.addEventListener('click', () => {
    overlayTwo.classList.add('active'); 
    openModal.classList.add('active');
});
modalBtn3.addEventListener('click', () => {
    overlayTwo.classList.add('active');
    openModal.classList.add('active');
});
modalBtn4.addEventListener('click', () => {
    overlayTwo.classList.add('active');
    openModal.classList.add('active');
});
modalBtn5.addEventListener('click', () => {
    overlayTwo.classList.add('active');
    openModal.classList.add('active');
});
modalBtn6.addEventListener('click', () => {
    overlayTwo.classList.add('active');
    openModal.classList.add('active');
});
// closebtn == closeModal //
closeModal.addEventListener('click', () => {
    overlayTwo.classList.remove('active');
    openModal.classList.remove('active');  
});