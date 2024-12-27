//MENU HAMBURGUER PARA CELULAR
const menuToggle = document.getElementById('menuToggle');
const navbarLinks = document.querySelector('.navbar-links');
const navLinks = document.querySelectorAll('.navbar-links a');
const closeMenu = document.querySelector('.close-menu a'); // Seleciona o "X" para fechar

// Alternar menu (abrir/fechar)
menuToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// Fechar o menu ao clicar no "X"
closeMenu.addEventListener('click', () => {
  navbarLinks.classList.remove('active'); // Fecha o menu
});

// Fechar o menu ao clicar em qualquer link dentro do menu
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.classList.remove('active'); // Fecha o menu
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


document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".portfolio-filters button");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    const setPortfolioVisibility = (filter) => {
        portfolioItems.forEach(item => {
            item.classList.remove("hide-initially", "hide-last-column");

            const matchesFilter = filter === "all" || item.classList.contains(filter);
            item.style.display = matchesFilter ? "block" : "none";
        });
    };

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            document.querySelector(".portfolio-filters button.active").classList.remove("active");
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");
            setPortfolioVisibility(filter);
        });
    });

    setPortfolioVisibility("all");
});


// Função para abrir o Lightbox (modal) com a imagem clicada
document.querySelectorAll('.portfolio-item img').forEach(item => {
    item.addEventListener('click', (event) => {
        const imgSrc = event.target.src;  // Obtém o src da imagem clicada
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = imgSrc;  // Define a imagem do Lightbox
        document.getElementById('lightbox').style.display = 'flex';  // Exibe o Lightbox
    });
});

// Função para fechar o Lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';  // Esconde o Lightbox
}

