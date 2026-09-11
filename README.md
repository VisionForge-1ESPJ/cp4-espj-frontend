# 📝 Task Manager

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)

Sistema de gerenciamento de tarefas desenvolvido com **React + Vite**, focado em produtividade para desenvolvedores. Permite criar, organizar e acompanhar tarefas com persistência de dados via `localStorage`.

---

## 📑 Sumário

- [Funcionalidades](#-funcionalidades)
- [Tecnologias utilizadas](#️-tecnologias-utilizadas)
- [Como executar o projeto](#-como-executar-o-projeto)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Integrantes](#-integrantes)
- [Aprendizados](#-aprendizados)
- [Observação](#-observação)

---

## 🎯 Funcionalidades

### 📌 Cadastro de tarefas
- Nome
- Data
- Descrição
- Nível de prioridade

### ✅ Gerenciamento de tarefas
- Marcar tarefas como concluídas
- Remover tarefas

### 🔎 Filtros de visualização
- Todas as tarefas
- Pendentes
- Concluídas

### 💾 Persistência de dados
- Salvamento automático utilizando `localStorage`

### ⚙️ Boas práticas de código
- Uso de Hooks (`useState`, `useEffect`)
- Métodos de array como `map` e `filter`
- Uso de callbacks
- Código comentado nas partes principais

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| React | Biblioteca principal para construção da interface |
| Vite | Bundler e ambiente de desenvolvimento |
| JavaScript (ES6+) | Lógica da aplicação |
| HTML5 | Estruturação das páginas |
| CSS3 | Estilização |
| LocalStorage API | Persistência de dados no navegador |

---

## 📦 Como executar o projeto

\`\`\`bash
# Clone o repositório
git clone https://github.com/VisionForge-1ESPJ/CP4-1ESPJ-FRONTEND.git

# Acesse a pasta do projeto
cd CP4-1ESPJ-FRONTEND

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
\`\`\`

O projeto estará disponível em `http://localhost:5173` (porta padrão do Vite).

---

## 📁 Estrutura do projeto

\`\`\`
CP4-1ESPJ-FRONTEND/
├── public/
├── src/
│   ├── components/     # Componentes reutilizáveis (tarefa, filtros, formulário)
│   ├── hooks/          # Hooks customizados (se houver)
│   ├── App.jsx          # Componente raiz
│   └── main.jsx         # Ponto de entrada da aplicação
├── index.html
├── package.json
└── vite.config.js
\`\`\`

---

## 👨‍💻 Integrantes

| Nome | RM |
|---|---|
| Gustavo Braga | 569211 |
| Henry Gabriel | 570063 |
| Matheus Carvalho | 569454 |
| Nicholas Belo | 571063 |

---

## 📚 Aprendizados

Este projeto reforçou conceitos importantes como:

- Manipulação de estado no React
- Componentização
- Persistência de dados no navegador
- Estruturação de projetos com Vite
- Organização e boas práticas de código

---

## 📌 Observação

Projeto desenvolvido como atividade acadêmica com foco em prática de React e lógica de programação aplicada.

---

<p align="center">Feito pela equipe <strong>VisionForge</strong></p>