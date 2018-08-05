//configurar función timer para que la vista Splash sólo dure unos segundos
// const splash = document.getElementById('splash');
// window.onload.initialization();
// const initialization = () => {
//   splash.style.display = 'none';
// };

//inicializador para responsive NavBar

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems);
  console.log(instances);
});
//API GOOGLE MAPS
