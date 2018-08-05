let container = document.getElementById('container');
setTimeout(()=>{
    // quiero que cuando la animación se acabe, se agregue una clase
    container.classList.add('close');
    // después de 2 segundos, se le agregue la clase cerrar
    location.href = 'views/view1.html';
 },2000); 
 