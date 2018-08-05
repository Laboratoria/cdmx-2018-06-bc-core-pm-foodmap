window.initMap = () => {
  let cdmx = { lat: 19.364456, 
    lng: -99.187620};
  let map = new google.maps.Map(
    document.getElementById('map'), { zoom: 4, 
      center: cdmx });
  let marker = new google.maps.Marker({ position: cdmx, 
    map: map });
};