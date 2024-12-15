document.addEventListener('DOMContentLoaded', () => {
    // Select the header element
    const header = document.querySelector('.header');
  
    // Select the body element for background color change
    const body = document.body;
  
    // Add a scroll event listener to the window
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Select all navbar links
    const navbarLinks = document.querySelectorAll('.navbar a');
  
    // Function to set active link and handle background color
    const setActiveLink = (hash) => {
      navbarLinks.forEach(link => {
        if (link.getAttribute('href') === hash) {
          link.classList.add('active');
          // Change background color if it's the home link
          if (hash === '#' || hash === '') {
            body.style.backgroundColor = '#your-desired-color'; // Replace with your desired color
          }
        } else {
          link.classList.remove('active');
        }
      });
    };
  
    // Set initial active state and background color
    setActiveLink(window.location.hash || '#');
  
    // Add a click event listener to each navbar link
    navbarLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
  
        // Check if the link is an internal anchor or home
        if (href === '#' || href === '' || href.startsWith('#')) {
          event.preventDefault();
  
          // If it's the home link, change the background color
          if (href === '#' || href === '') {
            body.style.backgroundColor = '#your-desired-color'; // Replace with your desired color
          } else {
            // Reset background color for other links
            body.style.backgroundColor = '';
            
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
  
            if (targetSection) {
              // Smooth scroll to the target section
              targetSection.scrollIntoView({ behavior: 'smooth' });
            }
          }
  
          // Update the URL hash without triggering a page jump
          history.pushState(null, '', href);
  
          // Set active state
          setActiveLink(href);
        }
        // For non-anchor links, let the default behavior occur
      });
    });
  
    // Handle back/forward navigation
    window.addEventListener('popstate', () => {
      const hash = window.location.hash || '#';
      setActiveLink(hash);
      if (hash === '#' || hash === '') {
        body.style.backgroundColor = '#your-desired-color'; // Replace with your desired color
      } else {
        body.style.backgroundColor = '';
      }
    });
  });