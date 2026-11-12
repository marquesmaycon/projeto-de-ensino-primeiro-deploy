// Seleciona o botão de tema
const botaoTema = document.querySelector('.botao-tema');

// Se o navegador prefere o tema claro, tira a classe "dark" do body
if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  document.body.classList.remove('dark');
}

// Ao clicar, liga ou desliga a classe "dark" no body
botaoTema.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
