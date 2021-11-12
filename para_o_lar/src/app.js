const express = require("express");
const cors = require("cors");
const app = express();

const estabelecimentoRoutes = require('./routes/estabelicementoRoutes');

app.use(cors());
app.use(express.json());

app.use('/', estabelecimentoRoutes);

module.exports = app; 