const TELEFONE_INVALIDO = "Verifique o Telefone";

// Função para validar telefone-------------------------------------------------
function validarTelefone(telefone) {
  // Remove caracteres não numéricos
  telefone = telefone.replace(/\D/g, "");

  // Verifica se o telefone possui o formato correto
  // DDD (2 dígitos) + Número (9 dígitos, sendo o primeiro entre 6 e 9)
  const regexTelefone = /^(\d{2})(9\d{4})(\d{4})$/;
  return regexTelefone.test(telefone);
}

// Máscara e validação do telefone
document.addEventListener("DOMContentLoaded", () => {
  const feedback = document.createElement("div");
  const telefoneInput = document.getElementById("user_telefone");

  // Cria um elemento de feedback dinâmico abaixo do input
  feedback.style.fontSize = "0.9em";
  telefoneInput.parentNode.appendChild(feedback);

  // Aplica a máscara ao digitar
  telefoneInput.addEventListener("input", () => {
    telefoneInput.value = aplicarMascaraTelefone(telefoneInput.value);
  });

  // Validação ao sair do campo (blur)
  telefoneInput.addEventListener("blur", () => {
    const telefone = telefoneInput.value;

    if (telefone === "") {
      feedback.textContent = "";
      feedback.style.color = "";
      return;
    }

    if (validarTelefone(telefone)) {
      feedback.textContent = "";
      feedback.style.color = "";
    } else {
      feedback.textContent = TELEFONE_INVALIDO;
      feedback.style.color = "yellow";
    }
  });
});

// Função para aplicar máscara no telefone
function aplicarMascaraTelefone(telefone) {
  telefone = telefone.replace(/\D/g, ""); // Remove caracteres não numéricos
  telefone = telefone.replace(/^(\d{2})(\d)/, "($1) $2"); // Adiciona DDD
  telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona hífen

  return telefone;
}
//------------------------------------------------------------------------------
