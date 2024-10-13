// Initialize CountUp instances for each target element
var counterB = new CountUp('b', 0, 15, 0, 3, {
    useEasing: false,
    useGrouping: false
});
var counterM = new CountUp('m', 0, 100, 0, 4, {
    useEasing: false,
    useGrouping: false
});
var counterK = new CountUp('k', 0, 178, 0, 4, {
    useEasing: false,
    useGrouping: false
});
var counterPlus = new CountUp('plus', 0, 1500, 0, 5, {
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

// Create an IntersectionObserver to observe when the counters come into view
let observer = new IntersectionObserver(function (entries) {
    // If the counters are visible
    if (entries[0].isIntersecting) {
        // Start all the counters when the first one is in view
        startAllCounters();
        // Stop observing after the counters start
        observer.disconnect();
    }
}, {
    threshold: 0.5 // Adjust this to trigger when 50% of any element is visible
});

// Observe the first target element (#b) to start all counters
observer.observe(document.getElementById('b'));


<!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 22,
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
})
