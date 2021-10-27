const express = require("express");
const controller = require('../controller/estabelecimentoController');
const router = express.Router();

router.get('/todos', controller.getAll)
router.get('/:id', controller.getId)
router.post("/cadastro", controller.cadastrar)
router.patch("/:id/like", controller.like)
router.patch("/:id/deslike", controller.deslike)
router.delete("/:id/remove" ,controller.removerEstabelecimento)
router.put("/:id/atualizacao" , controller.atualizacao)


module.exports = router