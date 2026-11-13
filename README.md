# Primeiro Deploy: do Código ao Mundo

Projeto de ensino da faculdade para alunos iniciantes dos cursos de tecnologia (EAD). A ideia é aprender o básico da programação web construindo algo real: uma **página de links** (no estilo Linktree) publicada na internet com o **GitHub Pages**.

## Objetivo

Mostrar, na prática, os três pilares da web e como eles trabalham juntos:

| Pilar | Arquivo | Papel |
| --- | --- | --- |
| **HTML** | `index.html` | A **estrutura**: o que existe na página (foto, nome, bio, links, rodapé). |
| **CSS** | `style.css` | A **aparência**: cores, fontes, espaçamentos, sombras e o efeito dos botões. |
| **JavaScript** | `script.js` | O **comportamento**: o botão que troca entre o tema claro e o escuro. |

Ao final, cada aluno tem um site seu, no ar, com um endereço para compartilhar.

## O que você vai aprender

- **HTML:** tags semânticas (`header`, `main`, `footer`), imagens com `alt`, listas e links.
- **CSS:** seletores, variáveis de cor, box model (`margin`, `padding`, `border`), `display: flex`, estados `:hover`, `:focus-visible` e `:active`, e um `@media` para celular.
- **JavaScript:** selecionar um elemento com `querySelector`, ouvir um clique com `addEventListener` e ligar/desligar uma classe com `classList.toggle`.
- **Git e GitHub:** salvar o projeto em um repositório e publicar com o GitHub Pages.

## Estrutura do projeto

```
index.html   → conteúdo da página
style.css    → visual (tema "Arcade": fundo escuro, laranja e verde-ácido)
script.js    → troca de tema claro/escuro
```

Sem frameworks, sem bibliotecas e sem instalar nada: só um editor de código e o navegador.

## Como usar

1. Faça um fork ou baixe este repositório.
2. Abra o `index.html` no navegador para ver a página.
3. Personalize com os seus dados:
   - a foto: troque `marquesmaycon` em `https://github.com/marquesmaycon.png` pelo seu usuário do GitHub;
   - o nome, o @usuario e a bio;
   - os links das suas redes sociais e do seu portfólio.

## Como publicar no GitHub Pages

1. Envie os arquivos para um repositório no GitHub.
2. No repositório, vá em **Settings → Pages**.
3. Em **Source**, escolha a branch `main` e a pasta `/ (root)` e clique em **Save**.
4. Depois de alguns minutos, o site estará em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Pronto: seu primeiro deploy está feito!
