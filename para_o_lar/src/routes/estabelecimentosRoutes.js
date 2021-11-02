const express = require("express");
const controller = require('../controller/estabelecimentosController');
const router = express.Router();

router.get('/todos', controller.getAll)
router.get('/:id', controller.getId)
router.post("/cadastro", controller.cadastroEstabelecimento);
router.patch("/:id/like", controller.adicionaLike);
router.patch("/:id/unlike", controller.adicionaUnlike);
router.delete("/:id/delete", controller.removeEstabelecimento);
router.put("/:id/update", controller.atualizacao);

module.exports = router

