//Validador de credenciais de Loigin------------------------------------------------
document
  .querySelector("form#user_login")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    const email = document.getElementById("user_email").value;
    const password = document.getElementById("user_password").value;

    // Exemplo simples de validação
    if (email === "teste@teste" && password === "teste") {
      window.location.href = "../views/main.ejs"; // Redireciona para outra página
    } else {
      alert("Credenciais inválidas! Por favor, tente novamente.");
    }
  });
//-----------------------------------------------------------------------------------
