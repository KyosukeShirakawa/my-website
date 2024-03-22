const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu li');
const scrollBtn = document.querySelector('#scroll-down-icon');


scrollBtn.addEventListener('click', () => {
  window.scroll({
    top: 1210,
    behavior: "smooth"
  });

});





burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');

  navLinks.forEach((link, index) => { 
    if(link.style.animation) {
      link.style.animation = '';
    }else {
      link.style.animation = `navLinksFade 0.3s ease forwards ${index / 7 + 0.4}s`;
    }

  });

  burger.classList.toggle('toggle');
});