# Crowdfunding Product Page

Página de produto de financiamento coletivo, **responsiva e acessível**, construída com **React** e **Tailwind CSS**. O usuário escolhe uma recompensa, informa o valor da contribuição e vê, na hora, o total arrecadado, a barra de progresso, o número de apoiadores e o estoque se atualizarem.

O projeto nasceu de um desafio de front-end do [Frontend Mentor](https://www.frontendmentor.io) e foi desenvolvido com foco em **organização de componentes, gerenciamento de estado, regras de negócio no código e acessibilidade**.

---

## Demonstração

- **Projeto online:** https://hangtime319.github.io/crowdfunding-product-page-main/
- **Repositório:** https://github.com/hangtime319/crowdfunding-product-page-main

| Desktop | Mobile |
| :-----: | :----: |
| `[screenshot desktop]` | `[screenshot mobile]` |

---

## Funcionalidades

| Funcionalidade | Como funciona |
| --- | --- |
| **Escolha de recompensa** | Três recompensas com valor mínimo e estoque, mais a opção "Pledge with no reward". A escolha pode começar pelo botão "Select Reward" de cada card, que já abre o modal com a opção marcada. |
| **Contribuição com validação** | O campo já vem preenchido com o valor mínimo da recompensa. Valores vazios ou abaixo do mínimo são bloqueados antes de chegar à regra de negócio. O Enter também envia o formulário. |
| **Progresso em tempo real** | O total arrecadado, a barra de progresso e o número de apoiadores (+1) são atualizados após cada confirmação. |
| **Controle de estoque** | A quantidade só diminui na recompensa escolhida. Recompensas esgotadas ficam desabilitadas e visualmente apagadas. A contribuição sem recompensa não consome estoque. |
| **Favoritar o projeto** | Botão Bookmark que alterna entre "Bookmark" e "Bookmarked", com mudança de cor. |
| **Layout responsivo** | Abordagem mobile-first. O cabeçalho vira menu hambúrguer no celular, e os blocos de estatísticas, os cards e os modais se reorganizam por tamanho de tela. |
| **Estados de foco** | Todos os elementos interativos (botões, links, radios e campo de valor) têm estado de foco visível para navegação por teclado. |
| **Modal de agradecimento** | Confirmação exibida após a contribuição. |

---

## Destaques técnicos

### Estado centralizado em um hook customizado
Toda a regra de negócio vive em `useCrowdfund`, chamado **uma única vez** no `App`. Os componentes recebem apenas o que precisam por props. Isso evita estados duplicados e mantém os componentes simples e fáceis de testar.

### Regras de negócio protegidas em duas camadas
- **No formulário:** validação nativa (`required` e `min`) impede valor vazio ou abaixo do mínimo e mostra o aviso para o usuário.
- **No hook:** a função `confirmPledge` funciona como última linha de defesa. Ela ignora a confirmação se nenhuma opção estiver selecionada ou se a recompensa escolhida estiver sem estoque. Assim, o estoque nunca fica negativo, mesmo que a interface falhe.

### Atualizações de estado imutáveis
O estoque é atualizado com `.map()`, devolvendo uma nova lista em que apenas a recompensa escolhida muda (identificada pelo `id`). O restante da lista não é alterado.

### Valores derivados não viram estado
A porcentagem da barra de progresso é **calculada** a partir de `backed` e `target`, com limite de 100%, em vez de ser guardada como um estado separado.

### Componente de botão com variações de tamanho
O `Button` usa um objeto de consulta (`sizes`) que liga o nome do tamanho às classes completas do Tailwind. Isso é necessário porque o Tailwind só gera as classes que encontra escritas por inteiro no código.

### Tokens de design no Tailwind
Cores e fonte do design foram registrados no `@theme` do Tailwind (CSS), mantendo os valores do projeto original em um único lugar.

### Modal genérico e reutilizável
O componente `Modal` cuida apenas da moldura (overlay, card, foco e tecla ESC) e recebe o conteúdo por `children`. O mesmo componente serve ao modal de escolha e ao modal de agradecimento, com larguras diferentes definidas por quem o usa.

---

## Acessibilidade

- **Teclado:** todos os fluxos funcionam sem mouse. As recompensas formam um grupo de radios (`fieldset` com `legend`), navegável com as setas.
- **Modais:** `role="dialog"`, `aria-modal`, `aria-labelledby` ligado ao título, fechamento com **ESC**, foco enviado para dentro do modal ao abrir e **devolvido ao botão de origem** ao fechar.
- **Menu mobile:** o botão informa o estado com `aria-expanded` e muda o `aria-label` entre "Open Menu" e "Close Menu".
- **Bookmark:** usa `aria-pressed` para informar o estado de ligado e desligado, e tem nome acessível mesmo quando o texto é escondido no celular.
- **Barra de progresso:** `role="progressbar"` com `aria-valuenow`, `aria-valuemin`, `aria-valuemax` e `aria-label`.
- **Formulário:** o campo de valor tem `label` associado por `htmlFor` e `id`, e o símbolo `$` é decorativo (`aria-hidden`).
- **Imagens decorativas** com `alt` vazio, para não poluir a leitura por leitores de tela.

---

## Tecnologias

- [React](https://react.dev) (hooks: `useState`, `useEffect`, `useRef`)
- [Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com) (v4, com `@theme`)
- JavaScript (ES6+)
- HTML semântico

---

## Estrutura do projeto

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── MobileMenu.jsx
│   ├── ProjectIntro/
│   │   ├── ProjectIntro.jsx
│   │   └── BookmarkButton.jsx
│   ├── ProgressStats/
│   │   ├── ProgressStats.jsx
│   │   └── ProgressBar.jsx
│   ├── About/
│   │   ├── About.jsx
│   │   └── RewardCard.jsx
│   ├── BackProjectModal/
│   │   ├── BackProjectModal.jsx
│   │   └── PledgeOption.jsx
│   ├── ThankYouModal/
│   │   └── ThankYouModal.jsx
│   └── ui/
│       ├── Button.jsx
│       └── Modal.jsx
├── data/
│   └── rewards.js
├── hooks/
│   └── useCrowdfund.js
├── App.jsx
└── App.css
```

---

## Fluxo de uma contribuição

1. O usuário clica em "Back this project" ou em "Select Reward" de um card.
2. O modal abre (com a recompensa já marcada, no segundo caso) e o formulário aparece na opção escolhida, com o valor mínimo preenchido.
3. Ao enviar, o navegador valida o campo. Se for válido, `confirmPledge` recebe o valor.
4. O hook confere se há opção escolhida e estoque, soma o valor ao total, soma 1 aos apoiadores e reduz o estoque da recompensa escolhida.
5. O modal de escolha fecha, o de agradecimento abre, e a página já mostra os números atualizados.

---

## Como rodar o projeto

```bash
# clonar o repositório
git clone [adicione o link do repositório]

# entrar na pasta
cd [nome-da-pasta]

# instalar as dependências
npm install

# rodar em modo de desenvolvimento
npm run dev

# gerar a versão de produção
npm run build

# visualizar a versão de produção localmente
npm run preview
```

---

## Aprendizados

- **Chamar o hook uma vez só.** Cada chamada de `useCrowdfund()` cria uma cópia independente do estado. Centralizar a chamada no `App` e passar os dados por props mantém tudo sincronizado.
- **Funções em eventos.** Entendi a diferença entre passar uma função (`onClick={fn}`) e executá-la durante a renderização (`onClick={fn()}`), que causa o erro de re-renderizações infinitas. Quando há argumentos, uso uma função de seta.
- **Campos controlados.** O valor de um `input` chega como texto. Converto para número apenas no envio, para permitir campo vazio durante a digitação.
- **Estado derivado.** Se um valor pode ser calculado a partir de outros, não precisa ser um estado.
- **Listas e `key`.** Cada item gerado por `.map()` precisa de uma `key` estável, aplicada ao primeiro elemento retornado.
- **Camadas e posicionamento.** Aprendi como `relative`, `absolute`, `fixed` e `z-index` se relacionam, e por que elementos que mudam de altura devem ficar no fluxo normal da página.
- **Tailwind dinâmico.** Como o Tailwind lê classes escritas por inteiro, valores variáveis usam objetos de consulta (classes) ou o atributo `style` (largura da barra).
- **Regras de negócio defensivas.** Validar na interface e também no hook evita estados inválidos, como estoque negativo.
- **Acessibilidade na prática.** Gerenciamento de foco em modais, atributos ARIA, grupos de radios e navegação por teclado.
- **Depuração.** Ler a primeira linha do erro no console e seguir o caminho dos dados (props) até achar onde um valor se perde.

---

## Próximos passos

- Prender o foco do teclado dentro do modal enquanto estiver aberto.
- Mensagens de erro personalizadas no formulário, em vez do aviso nativo do navegador.
- Persistir os dados (por exemplo, com `localStorage`) para que contribuições e favorito sobrevivam ao recarregamento da página.
- Testes automatizados para o hook `useCrowdfund` e para o fluxo de contribuição.

---

## Autor

**Leonardo**, desenvolvedor front-end.

- LinkedIn: [linkedin.com/in/leo-amaral-brito](https://www.linkedin.com/in/leo-amaral-brito/)

Desafio e design originais por [Frontend Mentor](https://www.frontendmentor.io).