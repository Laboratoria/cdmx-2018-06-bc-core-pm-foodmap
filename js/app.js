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
            filter(results);
            // console.log(results[i]);
        }
    }

}

function createMarker(place) {
    let placeLoc = place.geometry.location;
    let marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    })
}

const filter = (results) => {
    for (let i = 0;i <= results.length; i++) {
        name = results[i].name;
        rating = results[i].rating;
        //console.log(rating);
        vicinity = results[i].vicinity;
        //console.log(vicinity); 
        console.log(name, rating, vicinity);
    }  
}




