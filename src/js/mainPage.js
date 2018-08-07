initializeFirebase();
let db = firebase.firestore();
let dbSettings = { timestampsInSnapshots: true };
db.settings(dbSettings);


document.getElementById('search-btn').addEventListener('click', event => {
  let placeToSearch = document.getElementById('search-term').value;
  let searchByInput = document.querySelector('.form-check-input:checked').value;
  searchData(placeToSearch, searchByInput);
});

// const drawResult = (result) => {
//   let toPrint;
//   let grade = getRankingPosition(result.rate);
//   toPrint += `<div class="card">
//   <img class="card-img-top" src="${result.url}">
//   <div class="card-body">
//     <h4 class="card-title">${result.name}</h4>
//     <p class="card-text">${result.address}.</p>
//     <p class="card-text">${grade}</p>
//   </div>
// </div>`;
//   document.getElementById('searchResults').innerHTML = toPrint;
// };