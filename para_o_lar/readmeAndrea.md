<img src=".\assets\BORA DANÇAR 1.jpg" width="100%">
<img src=".\assets\BORA DANÇAR API2.jpg" width="100%">

# API - BORA DANÇAR

## 🚀 Descrição

API desenvolvida para atividade de revisão de API, da semana 11 da turma On14 (Backend)do Curso Reprograma, da professora Edilaine Pontes. [{Reprograma}](https://reprograma.com.br/).

> Inciei nas aulas de dança por um acaso em 2012. Sempre fui muito tímida, mas a vontade de dançar sempre foi maior e me motivou a arriscar. Percebi o quanto isso mudou em várias áreas da minha vida e o quanto enriqueceu meu corpo e minha mente.

Além de bem estar, acredito que a dança atua como ferramenta transformadora da sociedade, na educação e na inclusão, além de trabalhar a autoestima e o empoderamento feminino. Meus amigos que não dançam se viam perdidos e sempre queriam saber a respeito de onde e o que dançar, eles tinham a mim para esta resposta, porém, as pessoas que não conhecem ninguém deste mundo de dança sentem essa falta de obterem informações para poderem se deliciar e encontrar uma escola de dança que lhe agrade e próxima de onde mora ou trabalha. <br>

> Foi pensando nisso que idealizei a BORA DANÇAR, uma API voltada para cadastro de escolas de dança como uma forma de beneficiar tanto as escolas quando seus futuros alunos,que desejam exercitar a maravilha que é dançar e não sabem por onde começar.

# Sumário

=================

<!--ts-->

- [Objetivos](#objetivos)
- [Aprendizados](#aprendizados)
- [Arquitetura Model View Controller](#arquitetura)
- [Instalação](#instalação)
  - [Pre Requisitos](#pré-requisitos)
  - [Rodando o Back End](#rodando-o-back-end)
  - [Tecnologias](#tecnologias)
  - [Features](#features)
  - [Rotas](#rotas)
- [Modelo com campos obrigatórios para teste: Postman ou Insomnia](#modelo-com-campos-obrigatórios-para-teste)
- [Agradecimentos](#agradecimentos)
<!--te-->

## ✅Objetivos

- Cadastro de estabelecimentos pelos usuarios(donos das escolas de dança);
- Busca de estabelecimentos por nome, ritmo e bairro;
- Avaliação dos estabelecimentos atraves de like ou deslike e comentarios dos usuarios;
- Simplificar a busca de estabelecimentos adequados para interessados em dançar e as escolas ganharem mais alunos;

## ✅Aprendizados

O projeto final consiste em uma API fundamentada no CRUD, que são: CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO).

## ✅Arquitetura

        Arquitetura MVC
        |
        \--📂  FORKIDS
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
                📂---configs
                |   **database.js
                |
                📂---controller
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
                |       estabelecimentoRoutes.js**
                |__

## ✅Instalação

- Para realizar download do projeto, siga as instruções abaixo:

### 👩‍👧‍👦Pré-requisitos

Você precisa ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o database NoSQL [Mongodb](https://www.mongodb.com/)
E claro o bom e velho editor de código como [VSCode](https://code.visualstudio.com/)

### 👩‍👧‍👦Rodando o Back End

Server Local

```bash
# Com o git
# Clone este repositório
$ git clone <>

# Acesse a pasta do projeto no terminal/cmd
$ cd para_o_lar

# Instale as dependências
$ npm install
$ npm instal mongoose

# Execute o servidor
$ npm start

# O servidor inciará na porta: - acesse <http://localhost:7050>

```

- Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

## 🛠Tecnologias

Para a consturição do projeto, as seguintes tecnologiasforam utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)
- [cors](https://www.npmjs.com/package/cors)
- [Postman](https://www.postman.com/)

### 👩‍👧‍👦Features

Funcionalidades da aplicação

- [x] Cadastros do estabelecimento - POST
- [x] Like ou deslike - POST
- [x] Busca - GET
- [x] Busca por ritmo, bairro - GET
- [x] Atualização em todos os campos - PUT
- [x] Apagar - DELETE

### 👩‍👧‍👦Rotas

- local: http://localhost:7050

- MongoDB: [mongodb://localhost:27017/forkids]()

- Heroku: https://forkids-backend.herokuapp.com/

#### Retorna teste com apresentação

{ mensagem: O app está rodando em http://localhost:3000 }

- [x] "/estabelecimentos"

#### Cria novo cadastro de estabelecimento

- [x] "/estabelecimentos"

#### Retorna estabelecimento por um id específico

- [x] "/:Id"

#### Deleta cadastro do estabelecimento

- [x] "/estabelecimentos/[ID]"

#### Enviar um comentario sobre um estabelecimento

- [x] "/estabelecimentos/[ID]/comentarios"

#### Dar um like em um estabelecimento

- [x] "/estabelecimentos/[ID]/like"

#### Atualiza o cadastro de um estabelecimento (id não pode ser modificado)

- [x] "/estabelecimento/[ID]"

## ✅Modelo com campos obrigatórios para teste

### 👩‍👧‍👦 Estabelecimentos

{
"id": "",
"likes": 2,
"nome": "Lunar Studio de Dança",
"endereço": "Rua Major Codeceira",
"número": 166,
"telefone": "00000000",
"bairro": "Santo Amaro",
"cidade": "Recife",
"pagamento": ["cartao", "pix"],
"ritmos": "kizomba",
"bailes": false
}

### 🚧 Projeto em Construção

        Autenticação
        Sistema de Login
        Ranking

# Agradecimentos

<p align="justify">E pensar que por acaso eu entrei no {Reprograma} e estou aqui fazendo projeto de uma rede social. Trabalho como arquiteta há 11 anos e estava/estou me sentindo estagnada na minha profissão, não me sentia valorizada e meu trabalho não me dava o que eu gostaria.Uma amiga sugeriu que fizesse este curso, no começo fiz mais pela curiosidade e  me deparei com o termo "transição de carreira" e passei a refletir sobre isso e como seria uma mudança enorme na minha vida. O Reprograma me fez ver que a rede de apoio é genuína entre mulheres. É fascinante ver o quanto tive ajuda de mulheres de todas as idades, de cidades e profissões diferentes em prol de algo muito maior, que é prover essa união e entrar no mercado de trabalho majoritariamente masculino.Mais que mulheres, são amigas, colegas que te respeitam e são admiráveis.

Gostaria de agradecer a todas elas, não citarei porque cada uma mesmo de forma pequena, me ajudaram bastante, tanto as alunas (minha turma On14) e as facilitadoras, acolhedoras e detentoras de habilidades de ensino com empatia que dificilmente encontraria em outro lugar.
Meu namorado, Alvaro, que me apoiou desde o começo e é desenvolvedor. Ele acredita mais em mim do que eu mesma. Foi meu amparo psicológico e amoroso nos momentos de ansiedade e estresse com o curso, além de ser muito compreensivo e paciente.
Aos meus pais que sempre serão meu porto seguro, meu alicerce, minha base de valores que levo para minha vida: sempre ir buscar o que quero e fazer o meu melhor.
Às minhas amigas e amigos, que por um tempo renunciei encontros por conta das aulas, trabalho e situação financeira, mesmo assim torcem sempre por mim e me querem bem.

Todes fazem parte desse projeto, e meu coração se enche de alegria e gratidão em ter tantas pessoas maravilhosas que vibram a cada vitória minha e querem me ver evoluindo sempre.<p>

<br>Que a mudança para o melhor esteja sempre presente em nossas vidas.<br>

</p>
