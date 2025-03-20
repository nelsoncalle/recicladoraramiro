document.addEventListener('DOMContentLoaded', function() { 
    const iconoHamburguesa = document.getElementById('icono-hamburguesa'); 
    const menu = document.getElementById('menu'); 
    const socialiconos = document.getElementById('socialiconos');
    iconoHamburguesa.addEventListener('click', function() { 
        menu.classList.toggle('active'); 
        socialiconos.classList.toggle('active'); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split("/").pop(); // Obtiene solo el nombre del archivo
    const menuLinks = document.querySelectorAll('.menu ul li a');

    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active'); // Añade la clase 'active' al enlace correspondiente
        }
    });
});



