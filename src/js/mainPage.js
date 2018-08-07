initializeFirebase();
let db = firebase.firestore();
let dbSettings = { timestampsInSnapshots: true };
db.settings(dbSettings);


document.getElementById('search-btn').addEventListener('click', event => {
  let placeToSearch = document.getElementById('search-term').value;
  let searchByInput = document.querySelector('.form-check-input:checked').value;
  searchData(placeToSearch, searchByInput);
});