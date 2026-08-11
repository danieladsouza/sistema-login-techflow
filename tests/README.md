# TechFlow Login

Sistema de autenticação (cadastro e login) desenvolvido como parte do desafio **"Construindo um Projeto Ágil no GitHub: Da Gestão ao Controle de Qualidade"**, para a empresa fictícia **TechFlow Solutions**.

## Objetivo do projeto

A TechFlow Solutions foi contratada por uma startup de logística para desenvolver um sistema de gerenciamento de tarefas baseado em metodologias ágeis. Este repositório contém a primeira funcionalidade essencial desse sistema: **autenticação de usuários**, com cadastro e login seguros.

## Escopo inicial

- Cadastro de novos usuários, com senha protegida por hash (bcrypt)
- Login com verificação de credenciais
- Interface web simples (HTML/CSS/JS) conectada à API
- Testes automatizados cobrindo os principais fluxos de autenticação
- Pipeline de integração contínua (CI) rodando os testes a cada push

## Metodologia ágil utilizada

O projeto foi conduzido com base em **Kanban**, utilizando o quadro do GitHub Projects com as colunas **A Fazer**, **Em Progresso** e **Concluído** para organizar e acompanhar as tarefas de desenvolvimento.

## Tecnologias utilizadas

- **Node.js** + **Express** — servidor e rotas da API
- **bcrypt** — hash seguro de senhas
- **Jest** + **Supertest** — testes automatizados
- **GitHub Actions** — integração contínua (CI)
- **HTML, CSS e JavaScript puro** — interface web

## Estrutura do projeto

```
techflow-login/
├── app.js                     → configuração do Express e rotas
├── server.js                  → inicialização do servidor
├── public/                    → interface web (HTML, CSS, JS)
│   ├── index.html
│   ├── style.css
│   └── app.js
├── tests/                     → testes automatizados
│   └── auth.test.js
└── .github/workflows/
    └── ci.yml                 → pipeline de CI
```

## Como executar o projeto

```bash
# Instalar dependências
npm install

# Rodar o servidor
node server.js

# Acessar no navegador
http://localhost:3000
```

## Como rodar os testes

```bash
npm test
```

## Gestão de mudanças

*(Esta seção será atualizada quando a mudança de escopo do projeto for implementada, conforme exigido pelo desafio, descrevendo a funcionalidade adicionada e a justificativa para a alteração.)*