// Select the header element
const header = document.querySelector('.header');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) { // Check if the page is scrolled
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Select all navbar links
const navbarLinks = document.querySelectorAll('.navbar a');

// Add a click event listener to each navbar link
navbarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Prevent default scrolling behavior (if needed)
        event.preventDefault();

        // Remove 'active' class from all links
        navbarLinks.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        link.classList.add('active');

        // Navigate to the section (optional)
        const targetId = link.getAttribute('href').substring(1); // Get the ID without '#'
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

