window.initMap = () => {
  let position = currentPosition();
  let map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 13,
      center: position
    });
  let marker = new google.maps.Marker({
    position: position,
    map: map
  });
};

window.currentPosition = () => {
  // Get user's current position.
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