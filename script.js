// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle (for responsive design)
const menu = document.querySelector('.menu');
const toggleButton = document.createElement('button');
toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
toggleButton.style.display = 'none';
toggleButton.style.background = 'none';
toggleButton.style.border = 'none';
toggleButton.style.fontSize = '1.5rem';
toggleButton.style.cursor = 'pointer';
document.querySelector('nav').appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.classList.remove('active');
        toggleButton.style.display = 'none';
    } else {
        toggleButton.style.display = 'block';
    }
});

// Initial check for mobile
if (window.innerWidth <= 768) {
    toggleButton.style.display = 'block';
}