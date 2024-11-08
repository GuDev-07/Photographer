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

// Redirecionamento do E-mail
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

// Verificação se o email é válido
    if (!emailPattern.test(email_id)){
        alert("Email incorreto! Esse não é um formato de e-mail válido. Por favor, tente novamente.");
        return; // Interrompe o envio se o e-mail for inválido
    }
// Parametros do Email
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


