//MENU HAMBURGUER PARA A PAGINA
const menuToggle = document.getElementById('menuToggle');
const navbarLinks = document.querySelector('.navbar-links');
const navLinks = document.querySelectorAll('.navbar-links a');
const closeMenu = document.querySelector('.close-menu a'); //X que fecha

//Alternar menu, abrir e fechar
menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        navbarLinks.classList.remove('active');
    });
});
//FINALIZADO HAMBURGUER MOBILE

