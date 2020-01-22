var ratingElement = document.querySelectorAll(".rating__circle");

ratingElement.forEach(function(element) {
  if (element.dataset.rating == null) return;

  var rating = +element.dataset.rating;
  var orientation = 360 * rating - 360 + 90;

  if (rating < 0.5) {
    element.style.backgroundColor = '#a5d475';
    element.style.backgroundImage =
      `linear-gradient(${orientation}deg, transparent 50%, #e6e6e6 50%), linear-gradient(90deg, #e6e6e6 50%, transparent 50%)`;
  } else {
    element.style.backgroundImage =
      `linear-gradient(90deg, transparent 50%, #a5d475 50%), linear-gradient(${orientation}deg, #a5d475 50%, transparent 50%)`;
  }
});
