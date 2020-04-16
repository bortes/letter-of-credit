# letter of credit

O repositório contém um exemplo de aplicação para para operar [letter of credit](https://www.bb.com.br/pbb/pagina-inicial/atendimento/bb-no-mundo/banco-do-brasil-in-london/letters-of-credit#/).

## tabela de conteúdo

- [letter of credit](#letter-of-credit)
  - [tabela de conteúdo](#tabela-de-conte%c3%bado)
  - [1. sobre o repositório](#1-sobre-o-reposit%c3%b3rio)
    - [1.1 configuração ambiente](#11-configura%c3%a7%c3%a3o-ambiente)
    - [1.2 configuração projeto](#12-configura%c3%a7%c3%a3o-projeto)

## 1. sobre o repositório

### 1.1 configuração ambiente

Tanto para codificação quanto execução precisamos apenas do:

+ [NodeJS](https://nodejs.org/) 10.17.0 ou superior
+ [Node.js Package Manager](https://www.npmjs.com/) 6.11.3 ou superior
+ [Node.js Package Runner](https://github.com/npm/npx/) 6.11.3 ou superior

### 1.2 configuração projeto

Aplicação criada seguindo o manual [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html) via comando:

```bash
npx create-react-app my-app
```

A estrutura padrão da aplicação gerada foi refeita para melhor organizar a solução.

Estrutura padrão:

+ App.css
+ App.js
+ App.test.js
+ index.css
+ index.js
+ logo.svg
+ serviceWorker.js
+ setupTests.js

Estrutura reorganizada

+ actions
+ assets
+ components
+ reducers
+ screens
+ services
+ stores

A aplicação foi desenvolvida baseada no framework [Bootstrap](https://getbootstrap.com/), aperência nos temas da [Bootswatch](https://bootswatch.com/) e no template [RoyalUI](https://github.com/BootstrapDash/RoyalUI-Free-Bootstrap-Admin-Template).

Os gráficos empregados foram construídos fazendo uso dos componentes do [Recharts](http://recharts.org/en-US/), este construído sobre o [D3.js - Data-Driven Documents](https://d3js.org/). Mais informações sobre os componentes aplicados para os gráfico pode ser obtida no [bit](https://bit.dev/recharts/). Veja também dicas para escolha do gráfico em [Como escolher o gráfico certo para seus dados](https://infogram.com/pt/pagina/escolha-grafico-de-visualizacoes-certo).
