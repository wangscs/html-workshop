/**
 * Simple Gallery
 *
 * Implement a slideshow gallery that can display images one at a time with a caption.
 * Users should be able to move the slides forward manually.
 *
 * OPTIONAL: Make the slideshow automatically play a new image every 3 seconds.
 */

// Initialize slideIndex on the first slide
var slideIndex = 1;
showSlides(slideIndex);

function changeSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  /**
  * returns the bounds from 1 to len of slides
  * so if you click prev on 1, itll return last slide 
  * and vise versa
  */
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}  

  // Loops to initialize every slide as a display of none
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }

  //Loop to replace all slide's dots to be not active
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
  }

  //Displays the selected picture and respective dot
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}