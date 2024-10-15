// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    centeredSlides: true,
    spaceBetween: 25,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
    }
});

// Function to add the animation class when the section is in view
function addAnimationClass(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'animate' class to the element
            entry.target.classList.add('animate');
            // Optionally, stop observing if you only want the animation to run once
            observer.unobserve(entry.target);
        }
    });
}

// Set up the Intersection Observer for sections
const sectionObserver = new IntersectionObserver(addAnimationClass, {
    root: null, // null means the viewport
    rootMargin: '0px', // margin around the root
    threshold: 0.1 // trigger when 10% of the section is visible
});

// Select all sections that you want to animate
const sections = document.querySelectorAll('.hero, h2, .about, .about-item, .counter, .tools, .success, footer, .counters-wrap, .full');

// Apply the observer to each section
sections.forEach(section => {
    sectionObserver.observe(section);
});

// Initialize CountUp instances for each target element
var counterB = new CountUp('b', 0, 15, 0, 1, {
    useEasing: false,
    useGrouping: false
});
var counterM = new CountUp('m', 0, 100, 0, 1, {
    useEasing: false,
    useGrouping: false
});
var counterK = new CountUp('k', 0, 178, 0, 1, {
    useEasing: false,
    useGrouping: false
});
var counterPlus = new CountUp('plus', 0, 1500, 0, 1, {
    useEasing: false,
    useGrouping: false
});

// Function to start all counters
function startAllCounters() {
    if (!counterB.error) counterB.start();
    if (!counterM.error) counterM.start();
    if (!counterK.error) counterK.start();
    if (!counterPlus.error) counterPlus.start();
}

// Create a different IntersectionObserver to observe when the counters come into view
let counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start all the counters when the first one is in view
            startAllCounters();
            // Stop observing after the counters start
            counterObserver.disconnect();
        }
    });
}, {
    threshold: 0.5 // Adjust this to trigger when 50% of any element is visible
});

// Observe the first target element (#b) to start all counters
counterObserver.observe(document.getElementById('b'));


