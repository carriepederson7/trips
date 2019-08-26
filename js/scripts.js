
// BACK END
function PlacesVisited() {
  this.locations = []
}

function Cities(city, country, landmarksVisited, whenVisited) {
    this.city = city;
    this.country = country;
    this.landmarksVisited = landmarksVisited;
    this.whenVisited = whenVisited;
}

PlacesVisited.prototype.addCity = function(location) {
  this.locations.push(location);
}

var placesVisited = new PlacesVisited();



// FRONT END
$(document).ready(function() {
  $('.form').submit(function(event) {
    event.preventDefault();
    var city = $("#city").val();
    var country = $("#country").val();
    var landmarksVisited = $("#landmarks").val();
    var whenVisited = $("#whenVisited").val();
    var newCity = new Cities(city, country, landmarksVisited, whenVisited);
    placesVisited.addCity(newCity);
    console.log(placesVisited);

  });
});
