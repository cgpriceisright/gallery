const carouselSlide = document.querySelector('.carousel-Slide');
const carouselImages = document.querySelector('.carousel-Slide img')

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (size * counter) + 'px';

nextBtn.addEventlistener('click',()=>{
  carouselSlide.style.transition = "transform 0.5s ease-in-out";

});