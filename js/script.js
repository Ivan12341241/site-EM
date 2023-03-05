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

SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 800,
    // Размер шага в пикселях 
    stepSize: 75,

    // Дополнительные настройки:

    // Ускорение 
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 2,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Поддержка тачпада
    touchpadSupport: true,
})