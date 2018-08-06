/* document.getElementById('pruebaM').addEventListener('click', el => {
  $('#myModal').on('shown.bs.modal', function() {
    $('#myInput').trigger('focus');
  });
}); */
 
// Some foursquare api with 16 places
const url = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll=34.0707998%2C%20-84.0554183&query=park&intent=browse&radius=2000&client_id=ZINY5BOEKJIGJYOFQZI4SQ1H0A1VSFAHEVJKYL12Z331B0J4&client_secret=O1L5JQCRCGABU0IV2ERHCVV3N4GWOPQARYD1PI3JTZXV0NW0';

fetch(url)
  .then(resp => resp.json())
  .then(data => {
    for (let key in data) {
      let keys = data[key];
      let venues = keys.venues;
      gettingData(venues);
    }
  })
  .catch(error => {
    console.log(error);  
  });

let arr = [];
let newArr = [];
const gettingData = (venues) => {
  console.log(venues);
  for (let x in venues) {
    let venuesId = venues[x].id;
    let venuesName = venues[x].name;
    let venuesNum = venues[x].location;
    let venuesAdd = venuesNum.address;
    let venuesLat = venuesNum.lat;
    let venuesLng = venuesNum.lng;
    let venuesCat = venues[x].categories[0].name;
    arr.push(venuesName);
  }
};

console.log(arr);

const filterSearch = (name) => {
  return (name === searchValue);
};

newArr = arr.filter(filterSearch);