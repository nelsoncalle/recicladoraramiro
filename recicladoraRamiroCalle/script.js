document.addEventListener('DOMContentLoaded', function() { 
    const iconoHamburguesa = document.getElementById('icono-hamburguesa'); 
    const menu = document.getElementById('menu'); 
    const socialiconos = document.getElementById('socialiconos');
    iconoHamburguesa.addEventListener('click', function() { 
        menu.classList.toggle('active'); 
        socialiconos.classList.toggle('active'); 
    });
});


// const carousel = document.querySelector('.carousel-inner');
// let index = 0;

// function slide() {
//     index++;
//     if (index >= 4) {
//         index = 0;
//     }
//     carousel.style.transform = `translateX(${-index * 100}%)`;
// }

// setInterval(slide, 4000);

