//function for GOOGLE MAPS API KEY
// const Map4Lovers = () => {
//   let mapProperties = {
//     center: new google.maps.LatLng(51.508742, -0.12085),
//     zoom: 8
//   };
//   let map = new google.maps.Map(document.getElementById('map'), mapProperties);
// };
//API GOOGLE MAPS GEOLOCALIZATION
// class findUserLoc {
//   constructor(callback) {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(position => {
//         this.latitude = position.coords.latitude;
//         this.longitude = position.coords.longitude;
//         //callback
//         callback();
//       });
//     } else {
//       alert('tu navegador no soporta geolocalización');
//     }
//   }
// }
// var userLocation = new findUserLoc();
// console.log(userLocation);
alert('conectado el data.js');

const initialize = () => {
  let center = new google.maps.LatLng(37.442, -122, 084058);
  console.log(center);
  let map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 13
  });
  console.log(map);
};

window.onload = initialize;
// google.maps.event.addDomListener(window, 'load', initialize);
