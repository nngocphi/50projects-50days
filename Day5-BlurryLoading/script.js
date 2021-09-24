const background = document.querySelector(".background");
const loadingText = document.querySelector(".loading-text");

var load = 0;
var int = setInterval(blur, 30);

function blur() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }
    loadingText.innerHTML = `${load}%`;
    loadingText.style.opacity = scale(load, 0, 100, 1, 0)
    background.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
