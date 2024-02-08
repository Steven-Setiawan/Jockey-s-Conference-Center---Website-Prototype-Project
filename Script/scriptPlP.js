const header = document.querySelector('header');
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
  link.addEventListener('click', () => {
    header.style.backgroundColor = 'black';
  });
});

///////////////////////////////////////////////////////////////////////

const overlay = document.querySelector('.overlay');
const overlayContent = document.querySelector('.overlay-content');

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

/****************************************************************************/

const overlay2 = document.querySelector('.overlay2');
const overlay2Content = document.querySelector('.overlay-content2');

overlay2.addEventListener('mouseenter', () => {
  overlay2Content.classList.add('active');
});

overlay2.addEventListener('mouseleave', () => {
  overlay2Content.classList.remove('active');
});

////////////////////////////////////////////////////////////////////////////////

const overlay3 = document.querySelector('.overlay3');
const overlay3Content = document.querySelector('.overlay-content3');

overlay3.addEventListener('mouseenter', () => {
  overlay3Content.classList.add('active');
});

overlay3.addEventListener('mouseleave', () => {
  overlay3Content.classList.remove('active');
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