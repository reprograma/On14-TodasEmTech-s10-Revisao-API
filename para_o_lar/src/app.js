const express = require("express");
const cors = require("cors");
const routesEstabelecimento = require("./routes/estabelecimentoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/estabelecimento", routesEstabelecimento);

module.exports = app;