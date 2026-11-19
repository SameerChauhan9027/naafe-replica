const navbar = document.querySelector('.navbar');
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', function () {
    navbar.classList.toggle('open');
});

const menuLinks = document.querySelectorAll('.nav-links a, .nav-buttons a');

menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navbar.classList.remove('open');
    });
});