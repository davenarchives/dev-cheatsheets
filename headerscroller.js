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
