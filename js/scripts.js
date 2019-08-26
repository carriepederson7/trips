// FRONT END
$(document).ready(function() {
  $('.form').submit(function(event) {
    event.preventDefault();

  });
});

// BACK END
function Locations() {
  this.city = []
}

function Cities(country, landmarksVisited, whenVisited) {
  this.country = country,
  this.landmarksVisited = landmarksVisited,
  this.whenVisited = whenVisited
}
