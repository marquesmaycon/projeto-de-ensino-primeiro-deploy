// Seleciona o botão de tema
const botaoTema = document.querySelector('.botao-tema');

// Ao clicar, liga ou desliga a classe "dark" no body
botaoTema.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
