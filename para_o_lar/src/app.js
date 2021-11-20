const express = require("express");

const cors = require("cors");// não esquecer de usar o cors

const routes = require('./routes/estabelecimentosRoutes')

//requerindo 
const app = express();

// utilizando
app.use (cors());
app.use (express.json());

app.use (routes);



//exportando 
module.exports = app

