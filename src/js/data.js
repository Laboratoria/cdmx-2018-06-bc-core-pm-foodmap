//alert('conectado data');
let map;
let infoWindow;
//función que inicia el pintado del mapa
const initMap = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 17
      });

      infoWindow = new google.maps.InfoWindow();
      infoWindow.setPosition(pos);
      infoWindow.setContent('Están aquí');
      infoWindow.open(map);
      map.setCenter(pos);
      var service = new google.maps.places.PlacesService(map);

      service.nearbySearch(
        {
          location: pos,
          radius: 800,
          type: ['restaurant']
        },
        callback
      );
      console.log(service);
    });
    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    }
    function createMarker(place) {
      var placeLoc = place.geometry.location;
      console.log(placeLoc);
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(place.name);
        infoWindow.open(map, this);
      });
    }
    // infoWindow.setPosition(pos);
    // infoWindow.setContent('Están aquí');
    // infoWindow.open(map);
    // map.setCenter(pos);
    // // function() {
    //   handleLocationError(true, infoWindow, map.getCenter());
    // }
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
};
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? 'Error: El servicio de Geolocalización no está disponible'
      : 'Error: Tu navegador tiene bloqueada la geolocalización'
  );
}
//cierra la función

window.onload = initMap;
