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
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active'); 
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// Smooth scrolling between sections for better UX
const smoothScroll = (target) => {
  const element = document.querySelector(target);
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth'
  });
};

// Smooth scrolling for menu items
document.querySelectorAll('.navbar__menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    smoothScroll(target);
  });
});

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

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    item.classList.toggle('active');

    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
  });
});

// Get the music element
var music = document.getElementById('background-music');

// Function to unmute and play music after user interaction
function enableMusic() {
  music.muted = false;  // Unmute the audio
  music.play().catch((error) => {
    console.log("Playback failed:", error);
  });
}

// Automatically play muted music on load
window.onload = function() {
  music.play().catch((error) => {
    console.log("Autoplay muted:", error);
  });
  
  // Add event listener for any user interaction to unmute the audio
  window.addEventListener('click', enableMusic, { once: true });
  window.addEventListener('scroll', enableMusic, { once: true });
};


// Schedule call
const scriptURL = 'https://script.google.com/macros/s/AKfycbwQcRq-2q8BZ05JGX8lgoWu2MQ0ePUz8MIAvHf7Wg5845t2MEHz1E6f2riW7KM-Qhle/exec';
      const form = document.forms['submit-to-google-sheet'];
    
      // Schedule Call button toggle
      document.getElementById('scheduleCallBtn').addEventListener('click', function() {
        const formContainer = document.getElementById('formContainer');
        formContainer.classList.toggle('hidden');
      });
    
      // Handle form submission
      document.getElementById('scheduleForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const name = document.getElementById('name').value;
        const cellphone = document.getElementById('cellphone').value;
    
        if (name && cellphone) {
          alert(`Thank you, ${name}. We will contact you at ${cellphone} shortly.`);
          
          // Prepare the form data to be submitted to Google Sheets
          const formData = new FormData(form);
          
          // Send data to Google Apps Script
          fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => response.json())
            .then(data => {
              if (data.result === "Success") {
                alert('Your information has been submitted successfully!');
              } else {
                
              }
            })
            .catch(error => {
              console.error('Error:', error);
              alert('There was an error submitting your information. Please try again.');
            });
    
          // Reset the form after submission
          form.reset(); 
        } else {
          alert('Please fill in all fields.');
        }
      });


  // Contact Us 
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); 

  alert("Your query has been submitted successfully!");

  contactForm.reset();
});

