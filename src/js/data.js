//function for GOOGLE MAPS API KEY
// const Map4Lovers = () => {
//   let mapProperties = {
//     center: new google.maps.LatLng(51.508742, -0.12085),
//     zoom: 8
//   };
//   let map = new google.maps.Map(document.getElementById('map'), mapProperties);
// };
//API GOOGLE MAPS
class findUserLoc {
  constructor(callback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
      });
    } else {
      alert('tu navegador no soporta geolocalización');
    }
  }
}

var userLocation = new findUserLoc();
console.log(userLocation);
