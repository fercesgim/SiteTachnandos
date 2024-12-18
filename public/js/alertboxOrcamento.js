 // Seleciona o formulário e a seção de mensagem
 const formulario = document.getElementById('user_contact');
 const mensagem = document.getElementById('mensagem');
 const fecharMensagem = document.querySelector('.fechar-mensagem');

 // Adiciona um evento de submit ao formulário
 formulario.addEventListener('submit', function(event) {
     event.preventDefault(); // Impede o envio padrão do formulário
     mensagem.classList.remove('d-none'); // Mostra a mensagem
 });

 // Adiciona um evento para fechar a mensagem ao clicar no ícone
 fecharMensagem.addEventListener('click', function() {
     mensagem.classList.add('d-none'); // Esconde a mensagem novamente
 });
