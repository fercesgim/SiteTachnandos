// Seleciona elemetos com a classe fechar-mensagem
const closeMessage = document.querySelector(".fechar-mensagem");
// Seleciona elemtos com a classe mensagem
const message = document.querySelector(".mensagem");
// Ao clicar no elemento de ckasse fehcar-mensagem ele remove a mensagem
closeMessage.addEventListener("click", () => {
  message.style.display = "none";
});
//Faz a mesagem sumir em 5 segundos
setTimeout(() => {
  message.style.display = "none";
}, 5000);
