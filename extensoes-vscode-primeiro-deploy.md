# Extensões do VS Code para o Primeiro Deploy

Neste projeto você vai criar e publicar a sua página de links usando **HTML**, **CSS** e **JavaScript**. As extensões abaixo deixam o VS Code mais preparado para esse trabalho: você vê o resultado na hora, o código fica organizado sozinho e os erros aparecem antes de virarem dor de cabeça.

Para instalar, abra o VS Code, aperte `Ctrl + Shift + X` (no Mac, `Cmd + Shift + X`), pesquise pelo **identificador** da extensão e clique em **Instalar**. Pesquisar pelo identificador garante que você instale a extensão certa, e não uma cópia com nome parecido.

---

## Essenciais

Instale estas antes do primeiro encontro.

| Extensão | Identificador | Para que serve no projeto |
|---|---|---|
| **Live Server** | `ritwickdey.LiveServer` | Abre a página no navegador e recarrega sozinha sempre que você salva um arquivo. Basta clicar em **Go Live**, no canto inferior direito. |
| **Prettier – Code formatter** | `esbenp.prettier-vscode` | Arruma a indentação e o espaçamento do HTML, do CSS e do JS sempre que você salva. Seu código fica legível sem esforço. |
| **Error Lens** | `usernamehw.errorlens` | Mostra o erro na própria linha em que ele está, em vez de esconder num painel. Ajuda muito a achar a tag que não fechou ou a chave que faltou. |
| **HTML CSS Support** | `ecmel.vscode-html-css` | Sugere no HTML as classes que você criou no `style.css` (por exemplo, `menu__nome` ou `principal`). Evita erro de digitação no nome da classe. |
| **axe Accessibility Linter** | `deque-systems.vscode-axe-linter` | Aponta problemas de acessibilidade no HTML enquanto você escreve, como imagem sem `alt` ou botão sem texto. A acessibilidade é um dos critérios de avaliação do projeto. |

> **Alternativa ao Live Server:** a extensão **Live Preview** (`ms-vscode.live-server`), da Microsoft, mostra a página numa aba dentro do próprio VS Code. Use **uma ou outra**, não as duas ao mesmo tempo.

---

## Recomendadas

Não são obrigatórias, mas deixam a experiência melhor.

| Extensão | Identificador | Para que serve |
|---|---|---|
| **Pacote de idioma Português (Brasil)** | `MS-CEINTL.vscode-language-pack-pt-BR` | Deixa os menus do VS Code em português. Depois de instalar, reinicie o VS Code. |
| **Code Spell Checker** | `streetsidesoftware.code-spell-checker` | Sublinha palavras escritas errado nos textos da página. |
| **Brazilian Portuguese – Code Spell Checker** | `streetsidesoftware.code-spell-checker-portuguese-brazilian` | Adiciona o dicionário em português à extensão anterior. Instale as duas juntas. |
| **Material Icon Theme** | `PKief.material-icon-theme` | Coloca ícones diferentes para `.html`, `.css`, `.js` e pastas, o que facilita achar os arquivos. |

---

## O que você NÃO precisa instalar

Muitos tutoriais antigos recomendam extensões que hoje já vêm embutidas no VS Code:

- **Auto Rename Tag / Auto Close Tag:** o VS Code já fecha as tags sozinho e pode renomear a tag de abertura e fechamento juntas (veja a configuração `editor.linkedEditing` abaixo).
- **Bracket Pair Colorizer:** colorir pares de chaves e parênteses já é recurso nativo.
- **Extensões de Emmet:** o Emmet já vem pronto. É ele que cria a estrutura básica do HTML quando você digita `!` e aperta `Enter`.

Também não instale **ESLint** agora. Ele é ótimo em projetos maiores, mas exige Node.js e configuração extra, o que não faz sentido para o tamanho deste projeto.

> **Sobre assistentes de IA que completam código:** durante os exercícios, vale desativar o autocompletar com IA. Escrever as tags e as propriedades com as próprias mãos é o que faz o conteúdo fixar.

---

## Configurações sugeridas

Estas configurações fazem o Prettier formatar ao salvar e ativam a renomeação de tags em par.

1. Aperte `Ctrl + Shift + P` (no Mac, `Cmd + Shift + P`).
2. Digite **"Abrir Configurações do Usuário (JSON)"** (ou **"Open User Settings (JSON)"**) e pressione `Enter`.
3. Adicione estas linhas dentro das chaves `{ }` que já existem no arquivo:

```json
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.linkedEditing": true,
"editor.wordWrap": "on"
```

| Configuração | O que faz |
|---|---|
| `editor.formatOnSave` | Formata o arquivo toda vez que você salva. |
| `editor.defaultFormatter` | Define o Prettier como formatador padrão. |
| `editor.linkedEditing` | Ao mudar `<div>` para `<nav>`, o `</div>` muda junto. |
| `editor.wordWrap` | Quebra linhas longas na tela, sem precisar rolar para o lado. |

---

## Instalar tudo de uma vez (opcional)

Se o comando `code` estiver disponível no terminal do seu computador, você pode instalar as essenciais e as recomendadas de uma só vez colando isto no terminal:

```bash
code --install-extension ritwickdey.LiveServer
code --install-extension esbenp.prettier-vscode
code --install-extension usernamehw.errorlens
code --install-extension ecmel.vscode-html-css
code --install-extension deque-systems.vscode-axe-linter
code --install-extension MS-CEINTL.vscode-language-pack-pt-BR
code --install-extension streetsidesoftware.code-spell-checker
code --install-extension streetsidesoftware.code-spell-checker-portuguese-brazilian
code --install-extension PKief.material-icon-theme
```

Se o terminal não reconhecer o comando `code`, tudo bem: instale pela aba de extensões, como explicado no início.

---

## Dica: testar no celular com o Live Server

Com o **Live Server** ligado, o computador e o celular conectados **na mesma rede Wi-Fi**, você pode abrir a página no celular. Troque `127.0.0.1` pelo endereço IP do seu computador na rede, mantendo a porta (normalmente `5500`). Assim você confere se o layout funciona bem em tela pequena antes mesmo de publicar.

---

## Se você usa o vscode.dev (no navegador)

Quem usa a versão do VS Code que roda no navegador consegue instalar várias destas extensões, mas nem todas funcionam lá, principalmente as que criam um servidor local, como o Live Server. Nesse caso, siga o fluxo combinado em aula para visualizar a página.
