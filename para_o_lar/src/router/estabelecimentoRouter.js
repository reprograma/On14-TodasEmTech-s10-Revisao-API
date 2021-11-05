const express = require("express");
const controller = require("../controllers/estabelecimentoController");
const router = express.Router();


router.get('/todos', controller.getAll); //fiz um get para acesso a todos os dados
router.get('/buscar/:id', controller.getId); //fiz um get para imprimir meu estabelecimento

router.post('/cadastrar', controller.cadastrar);

router.patch('/:id/like', controller.like);
router.patch('/:id/deslike', controller.deslike)




module.exports = router