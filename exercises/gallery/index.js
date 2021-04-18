// Set the starting image for the gallery display
var slideIndex = 1;

// Start the gallery!
showSlides(slideIndex);

// When a user clicks a nav arrow, go to the next slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// When a user clicks a dot, go to that slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// The switch for viewing the gallery
function showSlides(n) {
    // A counter to loop over the gallery images
    var i;

    // Variables for slide elements
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // Set the gallery image
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    // Toggle slide display on/off
    for (i = 0; i < slides.length; i++) {
        // Set slide style display value to none
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        // Remove "active" from dot class name
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}