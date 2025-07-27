let nextDom = document.getElementById('next');
let preDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let sliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom =document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

nextDom.onclick =function(){
    showSlider('next');
}
preDom.onclick =function(){
    showSlider('prev');
}

let timeRunning = 2000;
let runTimeout;

function showSlider(type){
    let sliderItemDom = sliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');


    if(type=='next'){
        sliderDom.appendChild(sliderItemDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }

    else{
        sliderDom.prepend(sliderItemDom[sliderItemDom.length -1]);

        //sliderDom.PictureInPictureWindow(sliderItemDom[sliderItemDom.length -1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length -1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeout);
    runTimeout = setTimeout(() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    },timeRunning);
}