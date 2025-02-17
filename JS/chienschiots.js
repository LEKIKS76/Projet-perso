document.querySelectorAll('.carousel_main').forEach(carousel => {
    const imagesContainer = carousel.querySelector('.carousel_img');
    const images = imagesContainer.querySelectorAll('.carousel_item');
    const totalImages = images.length;
    let currentIndex = 0;

    // S'assurer que le container est bien en flex
    // imagesContainer.style.display = 'flex';
    // imagesContainer.style.transition = 'transform 0.5s ease-in-out';

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextImage, 6000);
});