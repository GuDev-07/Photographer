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

//Redirecionamento do E-mail
function sendEmail() {
  console.log("sendEmail function called");

  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value; 
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  console.log("Captured Data:", { name, phone, email, message });

  emailjs.send("service_wdt3hil", "template_tvu0xjy", {
      name: name,
      phone: phone,
      email: email,
      message: message,
  })
  .then(function(response) {
      console.log("Email enviado com sucesso", response.status, response.text);
      window.location.href = 'obrigado.html';
  }, function(error) {
      console.error("Erro ao enviar e-mail:", error);
      alert("Falha ao enviar a mensagem: " + JSON.stringify(error));
  });
}
