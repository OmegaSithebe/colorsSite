const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Navbar Hide/Show on Scroll
let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.querySelector('.navbar');

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = '0';  // Show navbar
  } else {
    navbar.style.top = '-80px';  // Hide navbar
  }
  prevScrollPos = currentScrollPos;
};

// Highlight Active Menu Item and Smooth Scrolling
const highlightMenu = () => {
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const focusMenu = document.querySelector('#focus-page');
  const valuesMenu = document.querySelector('#values-page');
  const faqsMenu = document.querySelector('#faqs-page');
  const teamMenu = document.querySelector('#team-page');
  const scrollPos = window.scrollY;

  // Highlight active section
  if (scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
  } else if (scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    focusMenu.classList.remove('highlight');
  } else if (scrollPos < 2200) {
    focusMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    valuesMenu.classList.remove('highlight');
  } else if (scrollPos < 3000) {
    valuesMenu.classList.add('highlight');
    focusMenu.classList.remove('highlight');
    faqsMenu.classList.remove('highlight');
  } else if (scrollPos < 3800) {
    faqsMenu.classList.add('highlight');
    valuesMenu.classList.remove('highlight');
    teamMenu.classList.remove('highlight');
  } else if (scrollPos < 4600) {
    teamMenu.classList.add('highlight');
    faqsMenu.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);



// Our values

document.querySelectorAll('.value-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
      card.classList.add('hovered');
  });
  card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
  });
});

// FAQs

// Select all FAQ items
const faqItems = document.querySelectorAll('.faq-item');

// Add event listener to each FAQ question
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    // Toggle 'active' class on the clicked item
    item.classList.toggle('active');

    // Close other open items, if necessary
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
  });
});

// toggle music on and off
var music = document.getElementById('background-music');
var controlButton = document.getElementById('music-control');

// Function to check if music should play based on previous user interaction
function checkMusicState() {
  if (localStorage.getItem('musicPaused') === 'true') {
    controlButton.textContent = 'Play Music';
  } else {
    music.play().catch(() => {
      controlButton.textContent = 'Play Music';
    });
    controlButton.textContent = 'Pause Music';
  }
}

// Play or pause the music and store the user's preference
function toggleMusic() {
  if (music.paused) {
    music.play();
    controlButton.textContent = 'Pause Music';
    localStorage.setItem('musicPaused', 'false');
  } else {
    music.pause();
    controlButton.textContent = 'Play Music';
    localStorage.setItem('musicPaused', 'true');
  }
}

// On page load, check the music state from localStorage
window.onload = function() {
  checkMusicState();
};

