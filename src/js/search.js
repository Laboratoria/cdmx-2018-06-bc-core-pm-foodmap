let map;
const initMap =() => {
  let center = new google.maps.LatLng(19.4913063,-99.2067212);
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 15
  });
  let request = {
    location: center,
    radius: 500,
    types: ['restaurant']
  };
  let service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, callback);
}

const callback = (results, status) => {
  if(status == google.maps.places.PlacesServiceStatus.OK){
    for (let i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}
const createMarker = (place) => {
  let placeLoc = place.geometry.location;
  let marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
}


initMap();
