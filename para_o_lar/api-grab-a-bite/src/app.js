const routes = require('./routes/estabelecimentosRoutes')

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/estabelecimentos', routes)

module.exports = app;