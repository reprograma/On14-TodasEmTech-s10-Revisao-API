const express = require("express");
const cors = require("cors");

const app = express();
const routes = require("./routes/estabelecimentoRoutes");

app.use(cors());
app.use(express.json());//identifica q é pro servidor

app.use("/estabelecimentos", routes);//rota raíz do caminho

// app.use(routes);

// app.use(express.json()); 

module.exports = app