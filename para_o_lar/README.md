<img src="./assets/inicio.png" width="100%">
<img src="./assets/meio.jpg" width="100%">


# API - FORKIDS
## 🚀 Descrição




   >Como mãe de duas crianças pequenas passei por varios infortunio, como trocar a fralda do meu filho em uma mesa porque o estabelecimento nao tinha fraldario ou um simples trocador no banheiro, ou ficar horas rodando de carro para encontrar um restaurante com espaço kids.<br>

   >
   >Para minizar esse sofrimento nasce a FORKIDS uma plataforma onde pais e mães cadastram estabelecimentos (restaurantes, cinema, hotel, cabeleireiro) etc que são adequados para levar as crianças, afinal nada pior do que chegar em um lugar e não encontrar nem uma cadeirinha para colocar o pequeno ou um cardapio adequado para crianças. De pais para pais essa é a essencia do FORKIDS


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
- Avaliação dos estabelecimentos atraves de like ou deslike e comentarios dos usuarios;
- Simplificar a busca de estabelecimentos adequados para levar as crianças;


## ✅Aprendizados

O projeto final consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). 

## ✅Arquitetura

        Arquitetura MVC
        |
        \--📂  FORKIDS
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
                |       estabelecimentoController.js
                |                      
                📂---model
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
$ git clone <git@github.com:Edlaine-Pontes/Forkids.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd Forkids

# Instale as dependências
$ npm install
$ npm instal mongoose

# Execute o servidor
$ npm start

# O servidor inciará na porta:33 - acesse <http://localhost:3000>
# Mongo conectado em mongodb://localhost:27017/forkids
```
* Modifique `.env` para receber as variáveis de ambiente e substitua para que seu servidor funcione adequadamente

Para acessar via Heroku, acesse o [link da API](https:///)

* Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

## 🛠Tecnologias

Para a consturição do projeto, as seguintes tecnologiasforam utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
- [heroku](https://dashboard.heroku.com/apps)

### 👩‍👧‍👦Features

Funcionalidades da aplicação

- [x] Cadastros do estabelecimento - POST
- [x] Comentario - POST
- [x] Like ou deslike - POST
- [x] Busca - GET
- [x] Busca por Categoria, estado e cidade - GET
- [x] Atualização em todos os campos - PUT
- [x] Apagar - DELETE

### 👩‍👧‍👦Rotas

* local: http://localhost:3000



#### Retorna teste com apresentação 
{ mensagem: O app está rodando em http://localhost:3000 }
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


## ✅Modelo com campos obrigatórios para teste

### 👩‍👧‍👦 Estabelecimentos

{
    "nome": "Bar do Juarez", 
    "site": "http://www.estabelecimento1.com.br",
    "categoria": "restaurante",
    "logradouro": "Rua Hum",
    "numero": 2,
    "bairro": "centro",
    "cidade": "Jundiaí",
    "estado": "sp"
}


### 🚧 Projeto em Construção

        Autenticação
        Sistema de Login
        Ranking
        


# Agradecimentos

<p align="justify">Aos 36 anos, depois de trabalhar por 16 anos em RH decidi que era hora de mudar de carreira. 
Me organizei e fiz um bom planejamento financeiro, mas nem todo planejamento poderia me preparar para esse caminho dificil e algumas vezes doloroso.
Mesmo ouvindo que eu era velha demais ou que por ser Psicologa eu não seria capaz de programar, eu nao desisti e no caminho encontrei a REPROGRAMA e a CLOUD GIRLS.
Mulheres maravilhosas que acreditaram em mim quando eu nao acreditei. Rainhas guerreiras que conseguem equilibrar familia, estudo e trabalho.
Entao eu quero agradecer a cada mulher que conheci na turma ON6-XP, a CECI que sempre ilumina os nossos dias a Jô pela oportunidade de mudar a minha vida e cada mentora e monitora que doaram o que existe de mais valioso "tempo".<br>
Um agradecimento especial ao meu marido Henrique Marti por ser meu porto seguro, minha inspiração e meu parceiro de vida, e ao meus filhos que tiveram paciencia (quando eu nao tinha). <br>
E ao Cloud Girls (Juh e Danilo) que abriu as portas da mudança e me permitiu voar bem alto.<br>

E lembre-se programar é ERRAR, ERRAR, ERRAR e ACERTAR e não esqueça de ser divertir!</p>