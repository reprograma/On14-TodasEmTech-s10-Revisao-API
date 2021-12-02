# API REST
## Busca Padarias

 > Essa API foi construída para cadastrar padarias para quem precisa encontrar de forma mais rápida e eficiente. Além do cadastro faz uma busca completa por nome, endereço, bairro, ainda informa o tipo de pagamento que aceita e seu número de contato. Foi pensada para quem necessita encontrar uma padaria na hora e não sabem onde buscar. Avaliações também estarão disponíveis, com possibilidade de like e deslike.<br>

## ✅ Aprendizados

O projeto consiste em uma API REST com uso dos principais métodos HTTP: GET, POST, PUT, PATCH e DELETE.

## 📂Arquitetura

        Arquitetura MVC
        |
        \--📂  API - FIGHT FOUND
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
                |       estabelecimentos.json
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
$ git clone <https://github.com/juliarebecca/On14-TodasEmTech-s10-Revisao-API/tree/JuliaBorges>

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

- [x] Cadastro da padaria - POST
- [x] Busca por id, categoria, pagamento - GET
- [x] Like ou deslike - PATCH
- [x] Atualização da padaria - PUT
- [x] Excluir padaria - DELETE

## Rotas

* local: http://localhost:7050
 

## Cria novo cadastro da padaria
- [x] "/cadrastro" 

## Retorna padarias e filtra por pagamento, bairro 
- [x] /todos" 

## Retorna padaria por um id específico
- [x] "/:id" 

## Atualiza o cadastro de uma padaria
- [x] "/:id/atualiza"

## Dar um like em uma padaria 
- [x] "/:id/likes" 

## Dar um deslike em uma padaria
- [x] "/:id/deslike" 

## Deleta cadastro da padaria 
- [x] "/:id/delete"


## ✅Modelo com campos obrigatórios para teste

###  Estabelecimentos

 {
        "id": 2,
        "likes": 1,
        "nome": "Padaria Ferreira",
        "categoria": "padaria",
        "endereço": "R. Santa Inês",
        "numero": 2812,
        "bairro": "Potengi",
        "cidade": "Natal",
        "telefone": "3214-7135",
        "pagamento": ["Dinheiro", "cartao", "pix"] 
    }

### 🚧 Projeto em Construção

        Integrar database com MongoDB
        
## 🔒 Licence

[MIT License](./LICENSE.md) © [Julia Borges](https://www.linkedin.com/in/juliarebeccaborges/)
