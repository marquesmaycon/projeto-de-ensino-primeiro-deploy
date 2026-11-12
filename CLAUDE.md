# CLAUDE.md — Primeiro Deploy (página de links, design Arcade)

## Contexto

Este é o projeto de ensino **Primeiro Deploy: do Código ao Mundo**. Alunos iniciantes de cursos EAD de tecnologia criam uma página de links (estilo Linktree) com HTML, CSS e JavaScript e publicam no GitHub Pages.

O código é escrito **ao vivo, em aula, junto com os alunos**. Por isso a regra mais importante é: **tudo precisa ser simples o bastante para um iniciante digitar, entender e explicar.** Na dúvida entre bonito e simples, escolha simples.

O visual de referência é o design "Arcade" (fundo escuro estilo fliperama, laranja e verde-ácido, sombra dura nos botões). Ele foi gerado antes com uma skill de design e ficou complexo demais. **Não use a skill Hallmark neste projeto** e não siga as regras dela (carimbos, tokens, `tokens.css`, `base.css`, scripts de slot).

## Arquivos

Só três arquivos, na raiz da pasta, sem subpastas:

```
index.html
style.css
script.js
```

- Sem frameworks, sem bibliotecas, sem npm, sem build.
- O CSS fica em `style.css`, ligado por `<link rel="stylesheet" href="./style.css">`. Nada de `<style>` dentro do HTML nem de `style="..."` nas tags.
- O JavaScript fica em `script.js`, carregado no fim do `<body>`.

## Regras de CSS

### Variáveis: no máximo 5

Use variáveis **só para as cores que mudam quando o tema troca**. Todo o resto é valor direto.

Mesmo padrão do Tailwind/shadcn: o `:root` guarda as cores do tema **claro** e a classe `.dark` redefine as mesmas 5 variáveis para o tema **escuro**. O escuro é o padrão do projeto porque o `<body>` já começa com `class="dark"`.

```css
/* Tema claro */
:root {
  --fundo: #fff8ec;
  --card: #ffffff;
  --texto: #1a0f20;
  --destaque: #c74300;
  --sombra: #00699a;
}

/* Tema escuro */
.dark {
  --fundo: #0f0415;
  --card: #190d20;
  --texto: #f2ecf5;
  --destaque: #f55600;
  --sombra: #d5e51b;
}
```

- Cores em **hexadecimal**, que é o formato visto na aula de CSS. Nada de `oklch()`, `color-mix()` ou `hsl()`.
- Cores que não mudam com o tema são escritas direto: bordas `#41304b`.
- Bio (`.bio`): `#3a2f40` no tema claro e `#d9d1dd` no escuro (regra `.dark .bio`), com `max-width: 300px`.
- Texto secundário (`.rodape` e `.endereco`): `#5c5163` no tema claro e `#a79dac` no escuro, com a regra `.dark .rodape, .dark .endereco`. No hover/foco do link, `a:hover .endereco, a:focus-visible .endereco` usa `var(--fundo)`.
- A classe `.dark` é a única em inglês, por seguir a convenção do Tailwind/shadcn.
- Sem variáveis de espaçamento, tamanho de fonte, duração ou raio. Escreva `16px`, `0.2s`, `4px` direto na propriedade.

### Propriedades permitidas

Use só o que aparece na sequência de aulas:

- **Box model:** `margin`, `padding`, `border`, `border-radius`, `width`, `max-width`, `box-sizing`.
- **Layout:** `display: flex` (com `flex-direction`, `align-items`, `justify-content`, `gap`), `margin: 0 auto`, `text-align`.
- **Visual:** `background`, `color`, `box-shadow`, `text-shadow`, `opacity`.
- **Texto:** `font-family`, `font-size`, `font-weight`, `text-transform`, `text-decoration`, `line-height`.
- **Interação:** `:hover`, `:focus-visible`, `:active`, `transition`, `transform: translate(...)`.
- **Responsividade:** `max-width` no container, e no máximo **um** `@media`, só se for realmente necessário.

### Evite

Não use: `grid`, `clamp()`, `calc()`, `min()`/`max()`, `:has()`, `:not()`, `::before`/`::after`, `isolation`, `mask`, `repeating-linear-gradient`, `steps()`, `@keyframes`, `@supports`, `aspect-ratio`, `overflow-wrap`, seletores com mais de dois níveis, BEM com `__` e `!important`.

### Organização

- Siga esta ordem, com um comentário curto em português antes de cada bloco:
  1. Variáveis (cores)
  2. Reset (`*` com `margin: 0`, `padding: 0`, `box-sizing: border-box`)
  3. `body`
  4. Container
  5. Perfil (avatar, nome, @usuario, bio)
  6. Botão principal
  7. Lista de links
  8. Rodapé e botão de tema
- Nomes de classe em português, curtos e com hífen: `.container`, `.avatar`, `.usuario`, `.bio`, `.principal`, `.links`, `.rodape`, `.botao-tema`.

## O que manter do visual Arcade

Só estes elementos de identidade:

- Fundo escuro (`--fundo`) e conteúdo em **uma coluna centralizada** (`max-width: 384px` no container, com 16px de padding lateral), em qualquer tamanho de tela. Nunca colocar elementos lado a lado.
- **Fontes:** Bungee no nome (em maiúsculas) e Chivo no resto, as duas do Google Fonts, com fallback `sans-serif`.
- **Nome** com um leve efeito RGB: `text-shadow: -2px 0 0 #f92434, 2px 0 0 #00d0d9;`. Tamanho 56px com `line-height: 1.02`, e 40px no celular (o único `@media`, `max-width: 480px`). O `.usuario` tem `margin-top: -8px` para ficar perto do nome.
- **Avatar:** imagem do GitHub (`https://github.com/USUARIO.png`) quadrada com cantos de 4px, borda de 2px na cor do texto e sombra dura `6px 6px 0 var(--sombra)`.
- **Botão principal** (portfólio): fundo `--destaque`, texto na cor `--fundo`, borda de 2px, sombra dura `6px 6px 0 var(--sombra)`. No `:hover`, ele "sobe": `transform: translate(-2px, -2px)` com sombra `8px 8px 0`. No `:active`, ele "afunda": `transform: translate(4px, 4px)` com uma sombra menor.
- **Lista de links** como um menu de jogo: uma caixa `--card` com borda, um link por linha, separados por uma linha fina. Cada linha mostra o nome da rede à esquerda e o endereço (`<span class="endereco">`, 14px) à direita, com `display: flex` e `justify-content: space-between`. No `:hover` e no `:focus-visible`, a linha inteira ganha fundo `--destaque` e texto `--fundo`.
- **Rodapé** em coluna (`flex-direction: column`, alinhado à esquerda com `align-items: flex-start`), com uma frase curta e o botão "Trocar tema" embaixo.

## O que foi removido de propósito (não recoloque sem eu pedir)

- Textura de scanline/CRT sobre o avatar.
- Escala de espaçamentos e tipografia em variáveis.
- Iniciais no lugar da foto e o script de "slot" de imagem.
- Animações (`@keyframes`, cursor piscando, efeitos em degraus).
- Comentários de carimbo do Hallmark e linhas de "waive".

## HTML

- Estrutura semântica: `header` (avatar, `h1`, @usuario, bio), `main` (botão principal e `ul` com os links), `footer`.
- `lang="pt-BR"`, `meta charset` e `meta viewport` no `head`.
- `img` sempre com `alt` descritivo, por exemplo `alt="Foto de perfil de Seu Nome"`.
- Links externos com `target="_blank" rel="noopener noreferrer"`.
- Sem emojis como ícones e sem SVG.
- Indentação de 2 espaços.

## JavaScript

O `script.js` faz só a troca de tema, em poucas linhas e com comentários em português:

```js
// Seleciona o botão de tema
const botaoTema = document.querySelector('.botao-tema');

// Ao clicar, liga ou desliga a classe "dark" no body
botaoTema.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
```

- Não adicione outras funcionalidades a menos que eu peça. Extras possíveis, **só quando solicitados**: salvar o tema no `localStorage`, ano atual automático no rodapé, botão "copiar link".
- Nada de `async`/`await`, classes, módulos ou funções aninhadas.

## Acessibilidade (não negociável, mesmo simplificando)

- Todo elemento clicável tem `:focus-visible` visível, por exemplo `outline: 3px solid var(--sombra); outline-offset: 3px;`.
- Texto sobre fundo escuro com bom contraste: nada de `opacity` em texto.
- Fonte do corpo com pelo menos 16px.
- O botão de tema é um `<button type="button">`, nunca uma `div` clicável.

## Como você deve trabalhar comigo

- Responda e comente o código **em português**.
- Antes de editar, diga em uma ou duas frases o que vai mudar.
- Depois de editar, explique o que mudou como se fosse para um aluno iniciante, citando a propriedade ou a tag usada.
- Prefira mudanças pequenas e em etapas, que possam ser feitas ao vivo em aula.
- Se um pedido meu exigir algo da lista "Evite", avise e proponha a alternativa mais simples antes de seguir.
- Não crie arquivos novos (README, pastas, configs) sem eu pedir.
