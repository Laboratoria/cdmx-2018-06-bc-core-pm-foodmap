var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });
}

const btnFind = document.getElementById("btnLocation");

btnFind.addEventListener('click', findMe = () => {
    const print = document.getElementById('map');

    // Verificar geolocalización
    if (navigator.geolocation) {
        console.log("El navegador soporta Geolocalizacion");
    } else {
        console.log("El navegador no soporta Geolocalizacion");
    }

    //Latitud y longitud
    localization = (position) => {
        console.log(position)
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const imgURL = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&size=375x300&markers=color:red%7C" + latitude + "," + longitude + "&key=AIzaSyBUaz17mTrasil6s3EjOP1NkpWqxRooDns&libraries=places";
        print.innerHTML = "<img src='" + imgURL + "'>";

    }

    error = () => {
        print.innerHTML = "<p>No fue posible obtener tu ubicación</p>";
    }
    navigator.geolocation.getCurrentPosition(localization, error);
});

