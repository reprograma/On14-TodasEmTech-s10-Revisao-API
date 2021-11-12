
<img src="../assets/Orange and Black Gyms Back to Business Landscape Banner.gif" width="100%">

# API REST
# FIGHT FOUND


## <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.vecteezy.com%2Farte-vetorial%2F1919928-silhueta-kick-martial-art-vector-design-on-white-background&psig=AOvVaw1ooTz1TEpMGokORa_rttJt&ust=1636832730363000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKC5_p3Lk_QCFQAAAAAdAAAAABAW"/> Descrição

   > Essa API foi construída para cadastrar academias que tenha Karatê como opção de luta. Além do cadastro faz uma busca completa por nome, endereço, bairro, ainda informa o tipo de pagamento que aceita e seu número de contato. Foi pensada para as pessoas que querem encontrar um espaço onde tenha sua luta preferida e não sabem onde buscar. Foi inspirado na minha dificuldade em muitos momentos de encontrar na minha infância locais que serão bons para praticar algo que eu amava. Avaliações também estarão disponíveis, com possibilidade de like e deslike.<br>

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
$ git clone <https://github.com/HannahFreitas/On14-TodasEmTech-s10-Revisao-API/tree/hannahfreitas>

## Acesse a pasta do projeto no terminal/cmd
$ cd para_o_lar

## Instale as dependências
$ npm install express nodemon cors

## Execute o servidor
$ npm start

 O servidor inciará na porta:6565. 
 Acesse <http://localhost:6565>


* Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente.

## 🛠 Tecnologias

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)
- [Cors](https://www.npmjs.com/package/cors)

## Funcionalidades da aplicação

- [x] Cadastro da academia - POST
- [x] Busca por id, categoria, pagamento, karatê - GET
- [x] Like ou deslike - PATCH
- [x] Atualização da academia - PUT
- [x] Excluir academia - DELETE

## Rotas

* local: http://localhost:6565
 

## Cria novo cadastro de academia
- [x] "/create" 

## Retorna academias e filtra por pagamento, bairro ou se há karatê
- [x] /todos" 

## Retorna academia por um id específico
- [x] "/todos/:id" 

## Atualiza o cadastro de uma academia
- [x] "/update/:id"

## Dar um like em uma academia 
- [x] "/:id/likes" 

## Dar um deslike em uma academia
- [x] "/:id/deslike" 

## Deleta cadastro da academia 
- [x] "/:id/delete"


## ✅Modelo com campos obrigatórios para teste

###  Estabelecimentos

{
    "nome": "Oxxy Academia",
    "categoria": "academia",
    "pagamento": ["Cartão","Dinheiro","Pix"],
    "karate":"false"
}

### 🚧 Projeto em Construção

        Integrar database com MongoDB
        
## 🔒 Licence

[MIT License](./LICENSE.md) © [Hannah Freitas](https://www.linkedin.com/in/hannahcfreitas/)