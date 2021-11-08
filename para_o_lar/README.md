<img src="./assets/Bares.png" width="100%">


# API - BUSQUE BARES
## 🥂 Descrição




   >Como aluna da {Reprograma} fui submetida nas semanas 10 e 11 desenvolver uma api onde pudessemos ter um catálogo de estabelecimentos em nossa cidade. Neste projeto optei por bares em funcionamento em Salvador e Lauro de Freitas.<br>

   >
   >Em grandes cidades é comum não sabermos sobre novos estabelecimentos, sobre a continuidade das atividades dos antigos e termos a facilidade de não percorrer longas distâncias, cheios de expectativas e não existir mais aquele destino.


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
   * [Agradecimentos](#agradecimentos)
<!--te-->

## ✅Objetivos

- Cadastro de estabelecimentos pelos usuarios;
- Busca de estabelecimentos por categoria, por bairro e cidade;
- Avaliação dos estabelecimentos atraves de like ou deslike;

## ✅Aprendizados

Este projeto da profa Edlaine Pontes consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). 

## ✅Arquitetura

        Arquitetura MVC
        |
        \--📂  para_o_lar
            |   README.md
            |   .gitignore
            |   package-lock.json
            |   package.json
            |   server.js
            \--📂 assets
            \--📂 node_modules
            \--📂src
                |
                |     app.js
                |
                |
                📂---controller
                |       
                |       estabelecimentoController.js
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

### 👩‍👧‍👦Pré-requisitos

Você precisa ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), o [Node.js](https://nodejs.org/en/)
E claro o bom e velho editor de código como [VSCode](https://code.visualstudio.com/)

### 👩‍👧‍👦Rodando o Back End 

Server Local

```bash
# Com o git
# Clone este repositório
$ git clone https://github.com/Janaina2208/On14-TodasEmTech-s11-Revisao-API.git

# Acesse a pasta do projeto no terminal/cmd
$ cd para_o_lar

# Instale as dependências
$ npm install

# Execute o servidor
$ npm start

# O servidor inciará na porta:7050 - acesse <http://localhost:7050>
```
* Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente

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
- [x] Like - POST
- [x] Deslike - POST
- [x] Busca - GET
- [x] Busca por Categoria, estado e cidade - GET
- [x] Atualização em todos os campos - PUT
- [x] Apagar - DELETE

### 👩‍👧‍👦Rotas

* local: http://localhost:7050



#### Retorna teste com apresentação 
{ mensagem: O app está rodando em http://localhost:7050 }
- [x] "/estabelecimentos" 

#### Cria novo cadastro de estabelecimento
- [x] "/cadastrar" 

#### Retorna estabelecimento por um id específico
- [x] "/:Id" 

#### Deleta cadastro do estabelecimento
- [x] "/:id/remove" 

#### Dar um like em um estabelecimento
- [x] "/:id/like" 

#### Dar um deslike em um estabelecimento
- [x] "/:id/deslike" 

#### Atualiza o cadastro de um estabelecimento (id não pode ser modificado)
- [x] "/:id/atualiza"


## ✅Modelo com campos obrigatórios para teste

### 👩‍👧‍👦 Estabelecimentos

{
   "likes": 1,
   "deslike": 0,
   "nome": "Espetto Baiano Prime",
   "categoria": "bar",
   "endereço": "Av Octávio Mangabeira",
   "numero": 2323,
   "bairro": "Pituba",
   "cidade": "Salvador",
   "telefone": "(71) 99657-1630",
   "pagamento": [
      "dinheiro",
      "cartao"
   ],
   "delivery": true
}
        
# Agradecimentos

<p align="justify">Agradecer à profa maravilhosa, talentosa, inteligente, paciente, incrível, Edlaine Pontes, por toda sua dedicação e ensinamentos. Obrigada por tudo!<br>