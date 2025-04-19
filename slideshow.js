var current = 0;
var total = 4;
var slides = document.querySelectorAll(".slide");

var next = document.getElementById("next");
var previous = document.getElementById("previous");

function showSlide(index) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "inline-block";
}

next.addEventListener("click", function () {
  current++;
  if (current >= total) {
    current = 0;
  }
  showSlide(current);
});

previous.addEventListener("click", function () {
  current--;
  if (current < 0) {
    current = total - 1;
  }
  showSlide(current);
});

// Auto-slideshow every 5 seconds
setInterval(function () {
  current++;
  if (current >= total) {
    current = 0;
  }
  showSlide(current);
}, 5000);

// Show first slide on load
showSlide(current);
