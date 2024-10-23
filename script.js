const menuToggle = document.getElementById('menuToggle');
const navbarLinks = document.querySelector('.navbar-links');
const navLinks = document.querySelectorAll('.navbar-links a')

menuToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// Adiciona evento de clique a cada link do menu
navLinks.forEach(link =>{
    link.addEventListener('click', () => {
        navbarLinks.classList.remove('active'); //Fecha o menu
    });
});