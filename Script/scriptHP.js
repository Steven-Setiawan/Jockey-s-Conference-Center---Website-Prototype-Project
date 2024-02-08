const header = document.querySelector('header');
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
  link.addEventListener('click', () => {
    header.style.backgroundColor = 'black';
  });
});

///////////////////////////////////////////////////////////////////////

const overlay = document.querySelector('.overlay');
const overlayContent = document.querySelector('.content');

overlay.addEventListener('mouseenter', () => {
  overlayContent.classList.add('active');
});

overlay.addEventListener('mouseleave', () => {
  overlayContent.classList.remove('active');
});

overlayContent.addEventListener('click', () => {
  const section2 = document.getElementById('section_2');
  section2.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////////////////////////////

const slideshowImages = document.querySelectorAll(".slideshow img");
let currentSlide = 0;

function showSlide() {
  slideshowImages.forEach((img) => {
    img.style.display = "none";
  });

  slideshowImages[currentSlide].style.display = "block";

  currentSlide++;
  
  if (currentSlide >= slideshowImages.length) {
    currentSlide = 0; 
  }

  setTimeout(showSlide, 3000);
}

showSlide();

/****************************************************************************/

const overlay2 = document.querySelector('.overlay2');
const overlay2Content = document.querySelector('.content2');

overlay2.addEventListener('mouseenter', () => {
  overlay2Content.classList.add('active');
});

overlay2.addEventListener('mouseleave', () => {
  overlay2Content.classList.remove('active');
});

////////////////////////////////////////////////////////////////////////////////
const sections = document.querySelectorAll('section');

function handleScroll() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add('push-animation');
    }
  });
}

window.addEventListener('scroll', handleScroll);

////////////////////////////////////////////////////////////////////////////////
var countdownDate = new Date("2023-06-30T18:00:00").getTime();

var countdown = setInterval(function() {
  
  var now = new Date().getTime();

  var timeRemaining = countdownDate - now;

  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (timeRemaining < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "Countdown Finished";
  }
}, 1000);