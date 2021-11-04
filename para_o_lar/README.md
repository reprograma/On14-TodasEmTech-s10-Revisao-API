<img src="./assets/santacena.png" width="100%">

# API - SANTA CENA 
## 📝 Descrição

Essa API foi desenvolvida como Projeto Guiado II, durante o curso de desenvolvimento Back-End na [{Reprograma}](https://reprograma.com.br/), com orientação da professora Edilaine Pontes.

   >Santo Amaro da Purificação é uma cidade que, nos últimos anos teve um crescente número de casas e barzinhos noturnos.<br>
   >Apesar de ser uma cidade pequena, a cena noturna vem agradando diversos públicos, e com isso o aumento por buscas de informações online dos estabelecimentos.<br> 
   >Essa aplicação recebeu então o nome de "Santa Cena", combinando os nomes e pensando em fácil linguagem de comunicação entre os usuários.<br>

## 🔧 Tecnologias

Para a construção desse projeto, foram utilizadas as seguintes tecnologias:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)
- [Cors](https://www.npmjs.com/package/cors)
- [VsCode](https://code.visualstudio.com/)
- [Postman](https://www.postman.com/)

## 🚧 Arquitetura

        Arquitetura MVC
        |
        \--  para_o_lar
            |   README.md
            |   .gitignore
            |   package-lock.json
            |   package.json
            |   **server.js**
            \-- node_modules
            \-- assets
            \--src
                |   app.js
                |
                ---controllers
                |
                |       estabelecimentoController.js
                |                      
                ---models
                |
                |       estabelecimentos.json      
                |
                ---routes
                |       
                |       estabelecimentoRoutes.js
                |__      

## ✅ Funcionalidades da aplicação

- [x] Cadastrar novo estabelecimento - POST
- [x] Enviar um Like ou deslike - PATCH
- [x] Busca geral ou por categoria, forma de pagamento, delivery- GET
- [x] Atualização em todos os campos - PUT
- [x] Apagar - DELETE


## ➡️ Intruções para rotas da aplicação 

Com as tecnologias previamente instaladas, siga os seguintes passos para rodar a aplicação:

📌 Abrir o Git Bash e clonar esse repositório com o comando $ git clone https://github.com/erikafreitas47/On14-TodasEmTech-s11-Revisao-API

📌 Instalar todas as dependências necessárias

📌 Iniciar o servidor no Git Bash dando o comando "npm start". A mensagem a seguir deverá aparecer no terminal:<br>

{Mensagem: A aplicação está rodando na porta 7050}

📌 Abrir o Postman e selecionar o verbo desejado para rodar a aplicação: <br>

📌 Para listar todos os estabelecimentos: /todos

📌 Para buscar um estabelecimento por ID: /:id

📌 Para cadastrar um novo estabelecimento: /criar

📌 Para dar likes no estabelecimento: /updatelikes/:id

📌 Para dar deslikes no estabelecimento: /updtaedeslikes/:id

📌 Para deletar: /deletar/:id

📌 Para atualizar: /atualizar/:id

<br>

# 📣 Entre em contato comigo:

* [Linkedin](https://www.linkedin.com/in/%C3%A9rika-de-freitas-b63331ba/) <br>
* [Telegram](https://t.me/erikafreitas47)
