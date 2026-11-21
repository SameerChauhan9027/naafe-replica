// ----- Mobile menu -----
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

// ----- Live event counter in the hero panel -----
const eventCount = document.getElementById('eventCount');

function updateEventCount() {
    const randomCount = Math.floor(Math.random() * (14000 - 11000 + 1)) + 11000;
    eventCount.textContent = randomCount.toLocaleString('en-US');
}

setInterval(updateEventCount, 1500);

// ----- Count-up numbers in the problem section -----
const statNumbers = document.querySelectorAll('.stat-number');

function countUp(element) {
    const target = Number(element.dataset.target);
    const suffix = element.dataset.suffix;
    const steps = 50;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(function () {
        current = current + increment;

        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        element.textContent = Math.floor(current) + suffix;
    }, 30);
}

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            countUp(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(function (number) {
    number.textContent = '0' + number.dataset.suffix;
    observer.observe(number);
});