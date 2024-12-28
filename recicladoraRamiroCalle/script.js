// document.addEventListener('DOMContentLoaded', function() { 
//     const iconoHamburguesa = document.getElementById('icono-hamburguesa'); 
//     const menu = document.getElementById('menu'); 
//     iconoHamburguesa.addEventListener('click', function() { 
//         menu.classList.toggle('active'); 
//     });
// });

document.addEventListener('DOMContentLoaded', function() { 
    const iconoHamburguesa = document.getElementById('icono-hamburguesa'); 
    const menu = document.getElementById('menu'); 
    const socialiconos = document.getElementById('socialiconos');
    iconoHamburguesa.addEventListener('click', function() { 
        menu.classList.toggle('active'); 
        socialiconos.classList.toggle('active'); 
    });
});