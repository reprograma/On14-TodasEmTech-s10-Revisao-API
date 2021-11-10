<img src="./assets/Iguabinhaweb.png" width="100%">



# API - IGUABINHA WEB
## 🚀 Descrição




   >Resido em um distrito chamado Iguabinha, pertencente a cidade de Araruama, na Região dos Lagos do Estado do Rio de Janeiro, sendo longe do Centro da Cidade e mais próximo a um outro município. Como um lugar onde não existe um grande comércio,são distantes um do outro e não há propaganda, resolvi através dessa plataforma minimizar o trabalho de procura de estabelecimentos por moradores e visitantes<br>

   >
   >Assim, visando facilitar a vida das pessoas nasce a Iguabinha Web uma plataforma onde moradores e visitantes podem consultar, atualizar, cadastrar estabelecimentos (mercado, farmácia, lanchonete, posto de combustíveis, veterinária, etc), podendo inclusive deixar sua opinião  através de like ou deslike.


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
- Busca de estabelecimentos por categoria; 
- Avaliação dos estabelecimentos através de like ou deslike;
- Simplificar a busca de estabelecimentos por moradores ou visitantes de distrito de Iguabinha;


## ✅Aprendizados

Construção de API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTAR), UPDATE(ATUALIZAR) e DELETE(DESTRUIR). 

## ✅Arquitetura

        Arquitetura MVC
        |
        \--📂  IGUABINHA WEB
            |   README.md  
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
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) 
E claro o bom e velho editor de código como [VSCode](https://code.visualstudio.com/)

### 👩‍👧‍👦Rodando o Back End 

Server Local

```bash
# Com o git
# Clone este repositório
$ git clone <git@github.com:Edlaine-Pontes/Forkids.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd IGUABINHA WEB
# Instale as dependências
$ npm install
$ npm instal mongoose

# Execute o servidor
$ npm start


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
- [x] Comentario - POST
- [x] Like ou deslike - POST
- [x] Busca - GET
- [x] Busca por Categoria - GET
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


## ✅Modelo com campos obrigatórios para teste

### 👩‍👧‍👦 Estabelecimentos

{
        "id": 1,
        "likes": 5,
        "nome": "Drogaria Unilagos",
        "categoria": "Farmácia",
        "endereço": "Rua Blanca",
        "numero": 25,
        "bairro": "Iguabinha",
        "cidade": "Araruama",
        "telefone": "2624-0082",
        "pagamento": ["Dinheiro", "cartão"],
        "delivery": true
      
    },



### 🚧 Projeto em Construção

        Autenticação
        Sistema de Login
        Ranking
        


# Agradecimentos

<p align="justify">Aos 38 anos, decidi que era hora de mudar de carreira, por não me sentir satisfeita na qual escolhi. Descobri que sempre há tempo pra mudar. 
Deixei meu emprego e logo a seguir me inscrevi na Reprograma, fui selecionada e hoje faço parte deste incrível grupo de mulheres que conseguem se equilibrar com tantas funções a desempenhar.
Entao eu quero agradecer à REPROGRAMA  que confiou na minha história e me forneceu a possibilidade, de a esta altura da vida, mudar minha história e mostrar a mim mesma que sou capaz. Quero agradecer também a todas as mulheres da turma que se dedicam a ajudar às outras. Um agradecimento especial à Raquel, nossa facilitadora, uma mulher iluminada que em todas as aulas traz seu sorriso e a certeza de dias melhores.<br>
Agradeço imensamente à minha família por sempre estarem comigo nas minhas decisões, me apoiando, incentivando e acreditando junto comigo. <br>
Estou apenas iniciando no mundo da programação, mas espero que através do aprendizado consiga superar as minhas próprias expectativas.</p>
