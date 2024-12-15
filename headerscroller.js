document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const navbarLinks = document.querySelectorAll('.navbar a');

  // Change header style on scroll
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 0);
  });

  // Function to set active link
  const setActiveLink = (hash) => {
    navbarLinks.forEach(link => {
      const isActive = link.getAttribute('href') === hash;
      link.classList.toggle('active', isActive); // Add/remove 'active' class
    });
  };

  // Set initial active state based on the URL hash
  setActiveLink(window.location.hash || '#');

  // Add smooth scrolling and active link management
  navbarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        event.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        history.pushState(null, '', href);
        setActiveLink(href); // Update active link
      }
    });
  });

  // Update active link on history navigation
  window.addEventListener('popstate', () => {
    setActiveLink(window.location.hash || '#');
  });
});
