const CPF_INVALIDO = "CPF inválido";

// Função para aplicar máscara no CPF-----------------------------
function aplicarMascaraCPF(cpf) {
  cpf = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return cpf;
}
//-----------------------------------------------------------------

// Função para validar o CPF---------------------------------------
function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos

  // Verifica se o CPF tem 11 dígitos ou é uma sequência repetida
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return false;
  }

  // Função para calcular o dígito verificador
  function calcularDigito(base) {
    let soma = 0;
    for (let i = 0; i < base.length; i++) {
      soma += parseInt(base[i]) * (base.length + 1 - i);
    }
    let resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  }

  // Calcula os dois dígitos verificadores
  const baseCPF = cpf.slice(0, 9);
  const digito1 = calcularDigito(baseCPF);
  const digito2 = calcularDigito(baseCPF + digito1);

  return cpf === baseCPF + digito1.toString() + digito2.toString();
}

// Adiciona eventos ao campo CPF e formulário
document.addEventListener("DOMContentLoaded", () => {
  const cpfInput = document.getElementById("user_cpf");
  const form = document.querySelector("form"); // Seleciona o formulário

  // Cria um elemento de feedback dinâmico abaixo do input
  const feedback = document.createElement("div");
  feedback.style.fontSize = "0.9em";
  cpfInput.parentNode.appendChild(feedback);

  // Evento para aplicar a máscara enquanto o usuário digita
  cpfInput.addEventListener("input", () => {
    cpfInput.value = aplicarMascaraCPF(cpfInput.value);
  });

  // Evento quando o usuário sair do campo CPF (blur)
  cpfInput.addEventListener("blur", () => {
    const cpf = cpfInput.value;

    if (cpf === "") {
      feedback.textContent = "";
      feedback.style.color = "";
      return;
    }

    if (validarCPF(cpf)) {
      feedback.textContent = "";
      feedback.style.color = "";
    } else {
      feedback.textContent = CPF_INVALIDO;
      feedback.style.color = "red";
    }
  });

  // Evento para impedir o submit se o CPF for inválido
  form.addEventListener("submit", (event) => {
    const cpf = cpfInput.value;
    if (!validarCPF(cpf)) {
      feedback.textContent = CPF_INVALIDO;
      feedback.style.color = "red";
      event.preventDefault(); // Impede o envio do formulário
    }
  });
});

//-----------------------------------------------------------------
