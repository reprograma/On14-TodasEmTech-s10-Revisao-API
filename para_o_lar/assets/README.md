

# API ESTABELECIMENTOS
projeto da aula da professora Edi Pontes, na semana 10 do {Reprograma}.

# Sumário
=================
<!--ts-->
   * [Objetivos](#objetivos)
   * [Aprendizados](#aprendizados)
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

- Cadastro de estabelecimentos pelos usuarios;
- Busca de estabelecimentos por categoria, por bairro e cidade;
- Avaliação dos estabelecimentos atraves de like ou deslike e comentarios dos usuarios;
- Simplificar a busca de estabelecimentos adequados para levar as crianças;


## ✅Aprendizados

O projeto final consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). 

## ✅Arquitetura

        Arquitetura MVC
        |
        \--📂  para_o_lar
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
                📂---controllers
                |       
                |       estabelecimentoController.js
                |                      
                📂---models
                |       
                |       
                |       estabelecimento.js
                |       
                |
                📂---routes
                |      
                |       estabelecimentoRoutes.js**
                |__      



## ✅Instalação
* Para realizar download do projeto, siga as instruções abaixo:

### 👩‍👧‍👦Pré-requisitos

Você precisa ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o database NoSQL [Mongodb](https://www.mongodb.com/)
E claro o bom e velho editor de código como [VSCode](https://code.visualstudio.com/)

### 👩‍👧‍👦Rodando o Back End 

Server Local

```bash
# Com o git
# Clone este repositório
$ git clone <https://github.com/kamilaaliima/On14-TodasEmTech-s10-Revisao-API.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd para_o_lar

# Instale as dependências
$ npm install

# Execute o servidor
$ npm start

# O servidor inciará na porta: 7051 - acesse <http://localhost:7051>


* Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

## 🛠Tecnologias

Para a consturição do projeto, as seguintes tecnologiasforam utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)
- [cors](https://www.npmjs.com/package/cors)

### 👩‍👧‍👦Features

Funcionalidades da aplicação

- [x] Cadastros do estabelecimento - POST
- [x] Like ou deslike - POST
- [x] Busca - GET
- [x] Busca por Categoria, estado e cidade - GET
- [x] Atualização em todos os campos - PUT
- [x] Apagar - DELETE

### 👩‍👧‍👦Rotas

* local: http://localhost:7051



#### Retorna teste com apresentação 
{ mensagem: O app está rodando em http://localhost:7051 }
- [x] "/estabelecimentos" 

#### Cria novo cadastro de estabelecimento
- [x] "/estabelecimentos" 

#### Retorna estabelecimento por um id específico
- [x] "/:Id" 

#### Deleta cadastro do estabelecimento
- [x] "/estabelecimentos/[ID]" 


#### Dar um like em um estabelecimento
- [x] "/estabelecimentos/[ID]/like" 

#### Atualiza o cadastro de um estabelecimento (id não pode ser modificado)
- [x] "/estabelecimento/[ID]"

