var map;
function initMap() {
    var cdmx = { lat: 19.4326077, lng: -99.13320799999997 };
    // Mapa centrado en la CDMX
    map = new google.maps.Map(
        document.getElementById('map'), {
            center: cdmx,
            zoom: 11
        });
    // Pin en CDMX
    // var marker = new google.maps.Marker({position: cdmx, map: map});
    var request = {
        location: cdmx,
        radius: 8047,
        types: ['bakery']
    };
    var service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
            // console.log(results[i]);

        }
        filter(results);
    }

}

function createMarker(place) {
    let placeLoc = place.geometry.location;
    let marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    })
}

let space = document.getElementById('space');

const filter = (results) => {
    console.log(results);
    results.forEach ((result) => {
        let print = `  <a type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
<p class="card-text">${result.name}</p>
  </a>
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">${result.name}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p class="card-text">${result.rating}</p>
          <p class="card-text">${result.vicinity}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`
  space.innerHTML += print;
    })
    
};











