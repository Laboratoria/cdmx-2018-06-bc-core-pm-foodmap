initializeFirebase();
let db = firebase.firestore();
let dbSettings = { timestampsInSnapshots: true };
db.settings(dbSettings);

loadMap('map');

const searchData = (data, searchBy) => {
  if (searchBy === 'price') {
    db.collection('places').get()
      .then(result => {
        result.forEach(place => {
          let elementToPrint = '';
          let priceField = place.data().price;
          let searchResult = priceField.indexOf(data);
          let grade = getRankingPosition(place.data().rate);
          if (searchResult !== -1) {
            elementToPrint += `<div class="col-md-12 mt-3" onclick="showInfo('${place.id}')">
            <div class="card">
                        <img class="card-img-top" src="${place.data().url}">
                        <div class="card-body">
                          <h4 class="card-title">${place.data().name}</h4>
                          <p class="card-text">${place.data().address}.</p>
                          <p class="card-text">${grade}</p>
                        </div>
                      </div>
                      </div>`;
            document.getElementById('searchResults').innerHTML += elementToPrint;
          }
        });
      });
  } else if (searchBy === 'name') {
    db.collection('places').get()
      .then(result => {
        result.forEach(place => {
          let elementToPrint = '';
          let nameField = place.data().name;
          let nameToUpper = nameField.toUpperCase();
          let searchResult = nameToUpper.indexOf(data.toUpperCase());
          let grade = getRankingPosition(place.data().rate);
          if (searchResult !== -1) {
            elementToPrint += `<div class="col-md-12 mt-3" onclick="showInfo('${place.id}')">
            <div class="card">
                        <img class="card-img-top" src="${place.data().url}">
                        <div class="card-body">
                          <h4 class="card-title">${place.data().name}</h4>
                          <p class="card-text">${place.data().address}.</p>
                          <p class="card-text">${grade}</p>
                        </div>
                      </div>
                      </div>`;
            document.getElementById('searchResults').innerHTML += elementToPrint;
          }
        });
      });
  } else if (searchBy === 'address') {
    db.collection('places').get()
      .then(result => {
        result.forEach(place => {
          let elementToPrint = '';
          let addressField = place.data().address;
          let addressToUpper = addressField.toUpperCase();
          let searchResult = addressToUpper.indexOf(data.toUpperCase());
          let grade = getRankingPosition(place.data().rate);
          if (searchResult !== -1) {
            elementToPrint += `<div class="col-md-12 mt-3" onclick="showInfo('${place.id}')">
            <div class="card">
                        <img class="card-img-top" src="${place.data().url}">
                        <div class="card-body">
                          <h4 class="card-title">${place.data().name}</h4>
                          <p class="card-text">${place.data().address}.</p>
                          <p class="card-text">${grade}</p>
                        </div>
                      </div>
                      </div>`;
            document.getElementById('searchResults').innerHTML += elementToPrint;
          }
        });
      });
  } else {
    swal({
      type: 'error',
      title: 'Oops...',
      text: '¡No cenaste hoy!',
      icon: 'error',
    });
  }
};

const showInfo = (info) => {
  db.collection('places').doc(info).get()
    .then(result => {
      swal({
        titleText: `${result.data().name}`,
        text: `${result.data().address}`,
        imageUrl: `${result.data().url}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: `${result.data().name}`,
        confirmButtonText: '¡Ordenar Ahora!',
        confirmButtonColor: '#FDCA49',
        animation: false
      });
    });
};

document.getElementById('search-btn').addEventListener('click', event => {
  document.getElementById('searchResults').innerHTML = '';
  let placeToSearch = document.getElementById('search-term').value;
  let searchByInput = document.querySelector('.form-check-input:checked').value;
  searchData(placeToSearch, searchByInput);
  document.getElementById('search-term').value = '';
});