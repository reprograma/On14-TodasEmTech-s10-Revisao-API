const express = require("express");
const router = express.Router();
const controller = require("../controllers/estabelecimentoController");

router.get('/todos', controller.getAll); //fiz um get para acesso a todos os dados
router.get('/:id', controller.getId); //fiz um get para imprimir meu estabelecimento

router.post('/criar', controller.criarEstabelecimento)

module.exports = router