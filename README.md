# 🧠 Jogo da Velha (Tic Tac Toe) com React

Este é um projeto de Jogo da Velha desenvolvido em React, utilizando gerenciamento de estado com `useReducer` e `Context API`. A aplicação possui funcionalidades como histórico de jogadas, controle de jogador atual, e detecção automática de vencedor.

![React Tic Tac Toe](https://img.shields.io/badge/React-19.x-blue?style=flat&logo=react)  
![License](https://img.shields.io/badge/license-MIT-green)  
![Status](https://img.shields.io/badge/status-finalizado-blue)

---

## 🎮 Demonstração

> Interface simples e responsiva para duas pessoas jogarem alternadamente.  
> O jogo mostra de quem é a vez, detecta o vencedor automaticamente, e permite reiniciar ou voltar para jogadas anteriores.

---

## 🚀 Tecnologias utilizadas

- [React 19](https://react.dev/)
- [Context API + useReducer](https://react.dev/learn/scaling-up-with-reducer-and-context)
- [PropTypes](https://www.npmjs.com/package/prop-types)
- [UUID](https://www.npmjs.com/package/uuid) (para chaves únicas em listas)
- ESLint + Prettier (padronização de código)

---

## 📁 Estrutura de diretórios

```bash
src/
│
├── components/        # Componentes reutilizáveis (Board, Square, Reset, etc.)
├── contexts/          # Context API e reducer de estado do jogo
├── pages/             # Página principal do jogo
├── utils/             # Funções utilitárias (ex: cálculo do vencedor)
├── index.js           # Ponto de entrada da aplicação
├── index.css          # Estilos globais
```

⚙️ Como rodar o projeto localmente
Pré-requisitos
Node.js (versão 18 ou superior recomendada)

npm ou yarn

Passos:

```bash
# Clone o repositório
git clone git@github.com:Neto-Pereira25/tictactoe_react_app.git
cd tictactoe_react_app

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start

```

## A aplicação será executada em http://localhost:3000.

🧠 Funcionalidades
✅ Alternância entre jogadores (X e O)
✅ Detecção de vencedor
✅ Reset de partida
✅ Histórico de jogadas com possibilidade de retorno
✅ Layout responsivo

---

🧼 Padrões de Código

- Linting com ESLint
- Formatação com Prettier
- Configuração personalizada de ESLint e Prettier em `eslint.config.js` e `.prettierrc.js`

---

🙌 Contribuição
Contribuições são bem-vindas!
Sinta-se à vontade para abrir issues ou pull requests.

---

✉️ Contato
Desenvolvido por [José Neto] — contato: devneto203@gmail.com
