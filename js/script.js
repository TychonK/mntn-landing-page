let sky = document.getElementById("sky");
let mountain = document.getElementById("mountain");
let man = document.getElementById("man");

window.addEventListener('scroll', function () {
    var value = window.scrollY;

    sky.style.top = -value * 0.7 + 'px';
    mountain.style.top = -value * 0.4 + 'px';
    man.style.top = -value * 0.15 + 'px';
    gradient.style.top = -value * 0.15 + 'px';

} );