//inicializador para responsive NavBar
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems);
  console.log(instances);
});

//inicializador para options selector
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('select');
//   var instances = M.FormSelect.init(elems, options);
//   console.log(instances);
// });

// //inicializador del mapa
// const mapInit = () => {
//   const ubicacion = new findUserLoc(() => {
//     const options1 = {
//       center: {
//         lat: ubicacion.latitude,
//         lng: ubicacion.longitude
//       },
//       zoom: 16
//     };
//     let map = document.getElementById('map');
//     const mapaDraw = new google.maps.Map(map, options1);
//   });
// };
