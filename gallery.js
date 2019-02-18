const carouselSlide = document.querySelector('.carousel-Slide');
const carouselImages = document.querySelector('.carousel-Slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (size * counter) + 'px';

nextBtn.addEventlistener('click',()=>{
  if
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (size * counter) + 'px';

});

prevBtn.addEventlistener('click',()=>{
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (size * counter) + 'px';

});

carouselSlide.addEventlistener('transitionend',)()=>{
if (carouselImages[counter].id==='lastClone')
    carousel.Slide.style.transition='none';
    counter = carouselImages.length -2;
    carouselSlide.style.transform='translateX('+ (-size*counter)+'px)';
}