// window.initMap = (lat, long) => {
//   currentPosition();
//   let initialPosition = {lat: lat, 
//     lng: long};
//   let map = new google.maps.Map(
//     document.getElementById('map'), {
//       zoom: 9,
//       center: initialPosition
//     });
//   let marker = new google.maps.Marker({
//     position: initialPosition,
//     map: map
//   });
// };

window.currentPosition = () => {
  // Get user's current/initial position.
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  const success = (pos) => {
    let crd = pos.coords;
    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
    let initialPosition = {lat: crd.latitude, 
      lng: crd.longitude};
    let map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 9,
        center: initialPosition
      });
    let marker = new google.maps.Marker({
      position: initialPosition,
      map: map
    });
  };

  const error = (err) => {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
};

document.getElementById('search-btn').addEventListener('click', event => {
  let placeToSearch = document.getElementById('search-term').value;
  console.log(placeToSearch);
});