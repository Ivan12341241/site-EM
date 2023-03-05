let sliders = document.querySelectorAll('.slider');

for (let i = 0; i < sliders.length; i++) {
    init_slider(sliders[i]);
}

function init_slider(slider) {

    let slide = slider.querySelectorAll('.slide');

    let next = slider.querySelector('.next');

    let i = 0;

    next.addEventListener('click', function() {
        slide[i].classList.remove('block');

        i = (i + 1) % slide.length; // (*1)

        slide[i].classList.add('block');
    });
}