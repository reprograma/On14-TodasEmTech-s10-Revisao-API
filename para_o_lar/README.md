<img src="./assets/cover.gif" width="100%">


# API Estabelecimentos/Petshops
Projeto criado para aprendizado na aula da Profª Edlaine Pontes da {reprograma}
# Sumário
=================
<!--ts-->
   * [Objetivos](#objetivos)
   * [Arquitetura Model View Controller](#arquitetura)
   * [Instalação](#instalação)
      * [Pre Requisitos](#pré-requisitos)
      * [Rodando o Back End](#rodando-o-back-end)
      * [Tecnologias](#tecnologias)
      * [Features](#features)
      * [Rotas](#rotas)
   * [Modelo com campos obrigatórios para teste: Postman ou Insomnia](#modelo-com-campos-obrigatórios-para-teste)
<!--te-->
## ✅Objetivos

- Cadastro de estabelecimentos de petshops pelos usuarios;
- Busca de estabelecimentos por formas de pagamento, bairro ou se há entrega/delivery;
- Avaliação dos estabelecimentos atraves de like ou deslike e comentarios dos usuarios;
- Simplificar a busca de petshops;

## ✅Arquitetura

        Arquitetura MVC
        |
        \--📂  PARA-O-LAR
            |   README.md  
            |   .env
            |   .gitignore
            |   package-lock.json
            |   package.json
            |   **server.js**
            \--📂 node_modules
            \--📂 assets
            \--📂src
                |
                |   **app.js**
                |
                |
                📂---controller
                |       
                |       estabelecimentosController.js
                |                      
                📂---model
                |       
                |       
                |       estabelecimentos.json
                |       
                |
                📂---routes
                |      
                |       estabelecimentoRoutes.js
                |__      
## ✅Instalação
* Para realizar download do projeto, siga as instruções abaixo:

### 🐕 Pré-requisitos 🐈

Você precisa ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e um editor de código como [VSCode](https://code.visualstudio.com/)

### 🐕 Rodando o Back End 🐈

Server Local

```bash
# Com o git
# Clone este repositório
$ git clone <https://github.com/yaralviana/On14-TodasEmTech-s11-Revisao-API>
# Acesse a pasta do projeto no terminal/cmd
$ cd para-o-lar
# Instale as dependências
$ npm install
# Execute o servidor
$ npm start
# O servidor inciará na porta:7050 - acesse <http://localhost:7050>
```

* Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente.

## 💻 Tecnologias

Para a consturição do projeto, as seguintes tecnologiasforam utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)
- [cors](https://www.npmjs.com/package/cors)

### 🐕 Features 🐈

Funcionalidades da aplicação

- [x] Cadastros do estabelecimento - POST
- [x] Like ou deslike - PATCH
- [x] Busca - GET
- [x] Busca por tipo de pagamento, bairro ou delivery - GET
- [x] Atualização - PUT
- [x] Apagar - DELETE

### 🐕 Rotas 🐈

* local: http://localhost:7050
