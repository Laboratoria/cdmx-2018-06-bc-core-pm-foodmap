let searchAPI = document.getElementById('searchAPI');
let searchResultAPI = document.getElementById('searchResultAPI');
let url;


let placeLat = 19.43;
let placeLng = -99.13;

/* Se trae búsqueda del usuario por medio de un input, se substituyen los espacios
por %20, ya que corresponde al formato de búsqueda de Foursquare */
document.getElementById('btnSearchAPI').addEventListener('click', el => {
  let searchVal = searchAPI.value;
  let finalVal = searchVal.replace(/\s/g, '%20');

  // Establecemos parámetros para API de Foursquare
  let mainUrl = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll=';
  let lat = placeLat;
  let lng = placeLng;
  let queryS = finalVal;
    
  url = mainUrl + lat + '%2C%20' + lng + '&query=' + queryS + 
    '&intent=browse&radius=2000&limit=10&client_id=ZINY5BOEKJIGJYOFQZI4SQ1H0A1VSFAHEVJKYL12Z331B0J4&client_secret=O1L5JQCRCGABU0IV2ERHCVV3N4GWOPQARYD1PI3JTZXV0NW0';
  fetching(url);
  searchResultAPI.innerHTML = '';
});

const fetching = (url) => {
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
};

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
    let newArr = [venuesId, venuesName, venuesAdd, venuesLat, venuesLng, venuesCat];
    arr.push(newArr);
    printArr(newArr);
  }
};


const printArr = (newArr) => {
  let newID = newArr[0]; 
  let placeID = 'a' + newID.toString(); 
  let placeName = newArr[1];
  let placeAddress = newArr[2];
  placeLat = newArr[3];
  placeLng = newArr[4];
  let placeInfo = newArr[5];
  searchResultAPI.innerHTML += `<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#${placeID}">
    ${placeName}
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="${placeID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${placeName}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <h6>Dirección:</h6> 
        ${placeAddress}
        <h6>Categoría:</h6>  
        ${placeInfo}

          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`;
};

function initMap() {
  // The location of Uluru
  var googleLocation = {lat: placeLat, lng: placeLng};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: googleLocation});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: googleLocation, map: map});
}
