// --------------<< function >>-------------
// ham set vi tri cho slide
function setSliderImg(indexShow) {
    sliderImg.forEach(function (img, index) {
        img.style.left = `${(index - indexShow) * 100}%`;
    });
}

// -----------------<< change slide >>----------------------
const sliderImg = document.querySelectorAll('.slider__list img');

// set vi tri ban dau cho slide show
let imgShow = 0;
setSliderImg(imgShow);

setInterval(function () {
    imgShow++;

    if (imgShow == sliderImg.length) {
        imgShow = 0;
    }

    setSliderImg(imgShow);
}, 5000);