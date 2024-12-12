//MENU HAMBURGUER PARA CELULAR
const menuToggle = document.getElementById('menuToggle');
const navbarLinks = document.querySelector('.navbar-links');
const navLinks = document.querySelectorAll('.navbar-links a')

menuToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

navLinks.forEach(link =>{
    link.addEventListener('click', () => {
        navbarLinks.classList.remove('active'); //Fecha o menu
    });
});
//FIM DO MENU HAMBURGUER PARA CELULAR



//MENSAGEM PARA MEU E-MAIL
function sendEmail() {
    var from_name = document.getElementById("name").value.trim();
    var email_id = document.getElementById("email").value.trim();
    var number = document.getElementById("phone").value.trim();
    var message = document.getElementById("message").value.trim();

// Validando se o email esta descrito da forma correta
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


// Verificação de preenchimento dos campos
    if (!from_name || !email_id || !number || !message) {
        alert("Por favor, preencha todos os campos antes de enviar a mensagem.");
        return; // Interrompe o envio imediatamente se algum campo estiver vazio
    }

// Verificação se o email descrito pelo usuário foi válido
    if (!emailPattern.test(email_id)){
        alert("Email incorreto! Esse não é um formato de e-mail válido. Por favor, tente novamente.");
        return;
    }

    var params = {
        from_name: from_name,
        email_id: email_id,
        number: number,
        message: message
    };

    emailjs.send("service_wdt3hil", "template_tvu0xjy", params)
    .then(function (res) {
        window.location.href = "obrigado.html"; //Redireciona para a pagina de agradecimento pelo contato
    })
    .catch(function (err) {
        alert("Erro ao enviar mensagem: " + err);
    });
}
//FIM DO SCRIPT PARA MENSAGEM NO MEU E-MAIL

let currentIndex = 1;
let slideWidth = 0;

function setupInfiniteCarousel() {
    const slide = document.querySelector('.carousel-inner');
    const images = Array.from(slide.querySelectorAll('.carousel-item'));

    if (!images.length) return;

    slideWidth = slide.offsetWidth;

    // Clona os slides
    const firstClone = images[0].cloneNode(true);
    const lastClone = images[images.length - 1].cloneNode(true);

    slide.appendChild(firstClone);
    slide.insertBefore(lastClone, images[0]);

    slide.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}

function moveSlide(direction) {
    const slide = document.querySelector('.carousel-inner');
    const images = slide.querySelectorAll('.carousel-item');
    currentIndex += direction;

    slide.style.transition = 'transform 0.5s ease-in-out';
    slide.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

    slide.addEventListener('transitionend', () => {
        if (currentIndex === 0) {
            slide.style.transition = 'none';
            currentIndex = images.length - 2;
            slide.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
        }
        if (currentIndex === images.length - 1) {
            slide.style.transition = 'none';
            currentIndex = 1;
            slide.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
        }
    });
}

document.querySelector('.carousel-control-prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.carousel-control-next').addEventListener('click', () => moveSlide(1));

window.addEventListener('resize', () => {
    slideWidth = document.querySelector('.carousel-inner').offsetWidth;
    document.querySelector('.carousel-inner').style.transform = `translateX(${-slideWidth * currentIndex}px)`;
});

document.addEventListener('DOMContentLoaded', setupInfiniteCarousel);
