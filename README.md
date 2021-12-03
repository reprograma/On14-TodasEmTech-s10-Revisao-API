# API REST
## Kids Park

  > Essa API foi construída para cadastrar praças que tenham espaço para crianças e sejam adequadas para crianças. Além do cadastro faz uma busca completa por nome, endereço, bairro, ainda informa se é boa para criança e seu número de contato. Foi pensada para os pais que querem levar seus filhos a locais seguros, ou qualquer pessoa que tenha o intuito de levar a criança em uma praça. Foi inspirado na minha dificuldade em ter onde levar minha sobrinha em meus dias de folga, para passear. Avaliações também estarão disponíveis, com possibilidade de like e deslike.<br>
  
## ✅Aprendizados

O projeto consiste em uma API REST com uso dos principais métodos HTTP: GET, POST, PUT, PATCH e DELETE.

## 📂Arquitetura

        Arquitetura MVC
        |
        \--📂  API - Kids Park
            |   README.md  
            |   .gitignore
            |   package-lock.json
            |   package.json
            |   server.js
            \--📂 node_modules
            \--📂 assets
            \--📂src
                |
                |   app.js
                |
                📂---controllers
                |       
                |       estabelecimentoController.js
                |                      
                📂---models
                |       
                |       estabelecimento.json
                |
                📂---routes
                |      
                |       estabelecimentoRoutes.js
                |__      



## Instalação
Para realizar download do projeto, siga as instruções abaixo:

### Pré-requisitos

Instalar:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/)

### Rodando o Back End 

## No terminal/ gitbash:
### Clone este repositório
$ git clone <https://github.com/debbsgomes/On14-TodasEmTech-s10-Revisao-API/tree/deborahgomes>

## Acesse a pasta do projeto no terminal/cmd
$ cd para_o_lar

## Instale as dependências
$ npm install express nodemon cors

## Execute o servidor
$ npm start

 O servidor inciará na porta:7050. 
 Acesse <http://localhost:7050>


* Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente.

## 🛠 Tecnologias

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)
- [Cors](https://www.npmjs.com/package/cors)

## Funcionalidades da aplicação

- [x] Cadastro da praça - POST
- [x] Busca por id, categoria, se aceita criança - GET
- [x] Like ou deslike - PATCH
- [x] Atualização da praça - PUT
- [x] Excluir praça - DELETE

## Rotas

* local: http://localhost:7050
 

## Cria novo cadastro de praças
- [x] "/create" 

## Retorna praça e filtra por nome, cidade e se aceita criança
- [x] /todos" 

## Retorna praça por um id específico
- [x] "/todos/:id" 

## Atualiza o cadastro de uma praça
- [x] "/update/:id"

## Dar um like em uma praça
- [x] "/:id/likes" 

## Dar um deslike em uma praça
- [x] "/:id/deslike" 

## Deleta cadastro da praça
- [x] "/:id/delete"


## ✅Modelo com campos obrigatórios para teste

###  Estabelecimentos

   { 
        "nome": "Praça Muhammad Ali",
        "cidade": "Rio de Janeiro",
        "crianca": true
    }

### 🚧 Projeto em Construção

        Integrar database com MongoDB
        
## 🔒 Licence

[MIT License](./LICENSE.md) © [Deborah Gomes](https://www.linkedin.com/in/deborahgomes123/)