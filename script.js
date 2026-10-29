// JavaScript - Seleciona o botão e a div de mensagem
const botao = document.getElementById("botaoMensagem");
const mensagem = document.getElementById("mensagem");

// JavaScript - Adiciona um evento de clique ao botão
botao.addEventListener("click", function () {
  // Verifica se a mensagem está escondida
  if (mensagem.style.display === "none" || mensagem.style.display === "") {
    mensagem.style.display = "block"; // Mostra a mensagem na tela
    botao.textContent = "Ocultar promoção"; // Altera o texto do botão
  } else {
    mensagem.style.display = "none"; // Esconde a mensagem
    botao.textContent = "Ver promoção"; // Volta o texto do botão
  }
});