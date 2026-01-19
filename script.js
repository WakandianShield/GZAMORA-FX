const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar-section');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
