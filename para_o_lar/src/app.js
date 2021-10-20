const express = require("express");

const app = express();

app.use(cors());
app.use(express());

module.exports = app;