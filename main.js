document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  
  // Toggle menu
  menuBtn.addEventListener('click', () => {
      dropdownMenu.classList.toggle('open');
      // Optional: Animate the menu icon
      menuBtn.querySelector('i').classList.toggle('fa-times');
      menuBtn.querySelector('i').classList.toggle('fa-bars');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
      if (!menuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
          dropdownMenu.classList.remove('open');
          menuBtn.querySelector('i').classList.remove('fa-times');
          menuBtn.querySelector('i').classList.add('fa-bars');
      }
  });
  
  // Close menu when clicking on a link
  dropdownMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
          dropdownMenu.classList.remove('open');
          menuBtn.querySelector('i').classList.remove('fa-times');
          menuBtn.querySelector('i').classList.add('fa-bars');
      });
  });
});


//scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.foreach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
      });
    };
  });
};

//scroll
window.onscroll = function() {
  const header = document.querySelector('.header-class');
  if (window.scrollY > 80) { // Adjust value as needed
      header.classList.add('fixed');
  } else {
      header.classList.remove('fixed');
  }
};