// Initialize and add the map
function initMap() {
  // The location of Uluru
  var chapultepec = {lat: 19.4178,
    lng: -99.1869 };
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 13,
      center: chapultepec});
    // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: chapultepec,
    map: map});
}