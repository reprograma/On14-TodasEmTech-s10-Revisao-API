
# API REST
# GRAB A BITE - SEATTLE


## <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-space-needle-wonder-of-the-world-vitaliy-gorbachev-flat-vitaly-gorbachev.png"/> Descrição

   > Essa API resgata mémorias importantes da minha vida no exterior. A cidade de Seattle, em Washinton (U.S.) se tornou meu lar por 2 anos.  Ao longo desse período tive o privilégio de me aventurar por diferentes gastronomias, sem nunca esquecer que se a saudade batesse forte demais, a comida brasileira traria conforto!<br>


## ✅Aprendizados

O projeto consiste em uma API REST com uso dos principais métodos HTTP: GET, POST, PUT, PATCH e DELETE.

## 📂Arquitetura

        Arquitetura MVC
        |
        \--📂  API - GRAB A BITE
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
                |       estabelecimentosController.js
                |                      
                📂---model
                |       
                |       restaurantes.js
                |
                📂---routes
                |      
                |       estabelecimentosRoutes.js
                |__      



## Instalação
Para realizar download do projeto, siga as instruções abaixo:

### Pré-requisitos

Instalar:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/)

### Rodando o Back End 

# No terminal/ gitbash:
# Clone este repositório
$ git clone <git@github.com:VictoriaBastos253/GrabABite.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd GrabABite

# Instale as dependências
$ npm install express nodemon cors

# Execute o servidor
$ npm start

# O servidor inciará na porta:7050
# acesse <http://localhost:7050>


* Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente.

## 🛠 Tecnologias

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)
- [Cors](https://www.npmjs.com/package/cors)

### - Funcionalidades da aplicação

- [x] Cadastro do estabelecimento - POST
- [x] Busca por id, categoria, pagamento, delivery - GET
- [x] Like ou deslike - PATCH
- [x] Atualização do estabelecimento - PUT
- [x] Excluir estabelecimento - DELETE

## Rotas

* local: http://localhost:7050
 

#### Cria novo cadastro de estabelecimento
- [x] "/estabelecimentos" 

#### Retorna estabelecimentos e filtra por pagamento, bairro ou delivery
- [x] /estabelecimento/" 

#### Retorna estabelecimento por um id específico
- [x] "/estabelecimento/:id" 

#### Atualiza o cadastro de um estabelecimento 
- [x] "/estabelecimento/atualizar/:id"

#### Dar um like ou um dislike em um estabelecimento
- [x] "/estabelecimentos/:id" 

#### Deleta cadastro do estabelecimento
- [x] "/estabelecimentos/:id"


## ✅Modelo com campos obrigatórios para teste

###  Estabelecimentos

{
    "nome": "McMenamins Elks Temple", 
    "categoria": "Americano",
    "cidade": "Tacoma",
    "pagamento": ["Cartão","Dinheiro","Digital Wallet"]
    "delivery":"false"
}

### 🚧 Projeto em Construção

        Integrar database com MongoDB
        
## 🔒 Licence

[MIT License](./LICENSE.md) © [Victoria Rezende](https://www.linkedin.com/in/VictoriaRezende253/)
