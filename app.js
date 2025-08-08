let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

console.log("TEsting testing testing")


let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbNailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbNailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .item');

thumbNailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000
let timeAutoNext = 7000

nextDom.onclick = function() {
    showSlider('next');
}

prevDom.onclick = function() {
    showSlider('prev');
}


let runTimeout;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext)


function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0])
        thumbNailBorderDom.appendChild(thumbnailItemsDom[0])
        carouselDom.classList.add('prev')
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length -1])
        carouselDom.classList.add('prev')
    }

    clearTimeout(runTimeout);
    runTimeout = setTimeout (() => {
        carouselDom.classList.remove('next')
        carouselDom.classList.remove('prev')
    }, timeRunning);


    clearTimeout(runNextAuto);
    runNextAuto = setTimeout (() => {
        nextDom.click()
    }, timeAutoNext)

}
