

const url = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll=19.43%2C%20-99.13&query=coffee&intent=browse&radius=2000&client_id=ZINY5BOEKJIGJYOFQZI4SQ1H0A1VSFAHEVJKYL12Z331B0J4&client_secret=O1L5JQCRCGABU0IV2ERHCVV3N4GWOPQARYD1PI3JTZXV0NW0';

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
    let arr2 = [venuesId, venuesName, venuesNum, venuesAdd, venuesLat, venuesLng, venuesCat];
    arr.push(arr2);
  }
};

console.log(arr);

const search = document.getElementById('search');
const searchResult = document.getElementById('searchResult');

let searchValue = '';
document.getElementById('btnSearch').addEventListener('click', el => {
  searchResult.innerHTML = '';  
  let searchValue = search.value.toLowerCase();
  const filterSearch = (item) => {
    return (item[1].toLowerCase().includes(searchValue));
  };
  let newArr = arr.filter(filterSearch);
  console.log(newArr);
  printArr(newArr);
});

let lats = 0;
let lngs = 0;

const printArr = (newArr) => {
  newArr.forEach(element => {
    let miID = element[0];
    let newID = 'a' + miID.toString();
    let mapID = 'map' + miID.toString();
    let name = element[1];
    let address = element[3];
    let categorie = element[6];
    lats = element[4];
    lngs = element[5];
    console.log(newID);
    searchResult.innerHTML += `<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#${newID}">
    ${name}
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="${newID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${name}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        ${address}
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`
  initMap(lats, lngs, newID, mapID)
  });
};

// Initialize and add the map
function initMap(lats, lngs, newID, mapID) {
    console.log(lats, lngs, newID, mapID);

    // The location of Uluru
    var googleLocation = {lat: lats,
      lng: lngs };
      // The map, centered at Uluru
    var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 13,
        center: googleLocation});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: googleLocation,
      map: map});
  }