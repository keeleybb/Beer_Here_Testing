var map;

function initMap() {
  // The location of Uluru
  var uluru = { lat: 39.7392, lng: -104.9903 };
  // The map, centered at Uluru
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}
