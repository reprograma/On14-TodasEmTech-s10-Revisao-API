const routesEstabelecimento = require('./routes/rotasEstabelecimentos')

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/estabelecimentos', routesEstabelecimento)

module.exports = app;