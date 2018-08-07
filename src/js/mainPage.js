initializeFirebase();
let db = firebase.firestore();
let dbSettings = { timestampsInSnapshots: true };
db.settings(dbSettings);

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
            elementToPrint += `<div class="col-md-12 mt-3" onclick="showInfo('${place.data()}')">
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
            elementToPrint += `<div class="col-md-12 mt-3" onclick="showInfo('${place.data()}')">
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
            elementToPrint += `<div class="btn col-md-12 mt-3" onclick="showInfo('${place.data()}')">
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

document.getElementById('search-btn').addEventListener('click', event => {
  let placeToSearch = document.getElementById('search-term').value;
  let searchByInput = document.querySelector('.form-check-input:checked').value;
  searchData(placeToSearch, searchByInput);
});

const showInfo = (info) => {
  console.log(info);
  swal({
    title: '${info.name}',
    text: '${info.address}',
    imageUrl: '${info.url}',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: '${info.name}',
    animation: false
  });
};