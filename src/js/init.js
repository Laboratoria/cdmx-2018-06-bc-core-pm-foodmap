// Initialize Firebase
window.initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyCiLDBi-b0s3qQ7StQwIpepNwyEX65LHyo',
    authDomain: 'affamato-project.firebaseapp.com',
    databaseURL: 'https://affamato-project.firebaseio.com',
    projectId: 'affamato-project',
    storageBucket: 'affamato-project.appspot.com',
    messagingSenderId: '371498322149'
  });
};

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
    let initialPosition = {
      lat: crd.latitude,
      lng: crd.longitude
    };
    let map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 16,
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

window.searchData = (data, searchBy) => {
  db.collection('places').get()
    .then(place => {
      place.forEach(element => {
        
      });
    });
};


window.getRankingPosition = (position) => {
  let ranked = '';
  if (position === 'Aceptable') {
    ranked += `<i class="fas fa-cookie-bite"></i>`;
  }
  if (position === 'Bueno') {
    ranked += `<i class="fas fa-cookie-bite"></i><i class="fas fa-cookie-bite"></i>`;
  }
  if (position === 'Excelente') {
    ranked += `<i class="fas fa-cookie-bite"></i><i class="fas fa-cookie-bite"></i><i class="fas fa-cookie-bite"></i>`;
  }
  return ranked;
};