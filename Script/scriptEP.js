const header = document.querySelector('header');
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
  link.addEventListener('click', () => {
    header.style.backgroundColor = 'black';
  });
});

/////////////////////////////////////////////////////////

let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex].style.display = "block";
}

/////////////////////////////////////////////////////////////////

const slides = document.getElementsByClassName("slide");

for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  const image = slide.querySelector("img");
  const overlay = slide.querySelector(".overlay");

  image.addEventListener("click", () => {
    if (overlay.style.display === "none") {
      overlay.style.display = "block";
    } else {
      overlay.style.display = "none";
    }
  });
}

/////////////////////////////////////////////////////////////////////

const slidesContainer = document.querySelector('.slides');
const nextButton = document.querySelector('.next');

nextButton.addEventListener('click', () => {
  slidesContainer.style.transition = 'transform 0.8s ease-in-out';
  slidesContainer.style.transform = 'translateX(-100%)';
});

slidesContainer.addEventListener('transitionend', () => {
  slidesContainer.appendChild(slidesContainer.firstElementChild);
  slidesContainer.style.transition = 'none';
  slidesContainer.style.transform = 'translateX(0)';
});