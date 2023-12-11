let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-image').length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + document.querySelectorAll('.carousel-image').length) % document.querySelectorAll('.carousel-image').length;
    updateCarousel();
}

function updateCarousel() {
    const imageContainer = document.getElementById('image-container');
    const slideWidth = document.querySelector('.carousel-image').clientWidth;
    imageContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}