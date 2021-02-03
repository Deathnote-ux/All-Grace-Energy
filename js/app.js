const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileNavbar = document.querySelector('.mobile-navbar');
const overlay = document.querySelector('.overlay');
//openBtn//
openBtn.addEventListener('click', () => {
    overlay.classList.add('active');
    mobileNavbar.classList.add('active');
});
//closeBtn//
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    mobileNavbar.classList.remove('active');
});