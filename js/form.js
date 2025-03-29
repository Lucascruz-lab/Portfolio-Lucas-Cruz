document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Número do WhatsApp (coloque o seu número com código do país e sem espaços)
    let phoneNumber = "5519987801978"; 

    // Criando a mensagem formatada para o WhatsApp
    let whatsappMessage = `Olá, meu nome é ${name}!\n\n${message}\n\nMeu e-mail: ${email}`;

    // Gerando o link do WhatsApp
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirecionando o usuário para o WhatsApp
    window.open(whatsappURL, "_blank");
});
