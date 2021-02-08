const slider = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');
let counter = 1;

//show slide//
showSlide();
function showSlide() {
    slider.style.transform = `translateX(${-counter * 100}%)`;
    slider.style.transition = `transform 0.5s ease`;
    counter = counter + 1;
    if (counter === slide.length) {
        slider.style.transition = `none`;
        counter = 1;
    } else {
        slider.style.transition = `transform 0.5s ease`;
    }

    setTimeout(showSlide, 4000);
};