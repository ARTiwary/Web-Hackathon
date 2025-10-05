const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200;
    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

const carouselVideos = document.querySelectorAll('.carousel-video');
let currentIndex = 0;
carouselVideos.forEach((v, i) => i !== 0 ? v.style.display='none' : v.style.display='block');
setInterval(() => {
  carouselVideos.forEach(v => v.style.display='none');
  currentIndex = (currentIndex + 1) % carouselVideos.length;
  carouselVideos[currentIndex].style.display='block';
}, 5000);
