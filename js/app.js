const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileNavbar = document.querySelector('.mobile-navbar');
const overlay = document.querySelector('.overlay');
const navbarDropdown = document.querySelector('.navbar-dropdown');
const navbarMenu = document.querySelector('.navbar-menu');
//openBtn//
openBtn.addEventListener('click', () => {
    overlay.classList.add('active');
    mobileNavbar.classList.add('active');
});
//
navbarDropdown.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
//closeBtn//
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    mobileNavbar.classList.remove('active');
});