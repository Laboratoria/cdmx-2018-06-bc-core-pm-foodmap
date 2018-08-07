
window.onload = () => {
  const contenedor = document.getElementById('container-carga');
  contenedor.style.visibility = 'hidden';
  contenedor.style.opacity = '0';
  location.href = '../src/views/view1.html';
};


// Guardamos la ubicación de la data en una variable
const json = 'https://raw.githubusercontent.com/RaquelGlez/cdmx-2018-06-bc-core-pm-foodmap/master/data/data.json';
window.onload = () => {
  fetch(json)
    .then(response => response.json())
    .then((data) =>{
      search(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const searchInput = document.getElementById('search');
const btn = document.getElementById('btn-search');

const search = (data) => {
  textSearch = searchInput.value;
  console.log(textSearch);
};

btn.addEventListener('click', search);
