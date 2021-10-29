const controller = require("../controllers/estabelecimentoController");

const express = require("express");

const router = express.Router();

router.get("/todos", controller.getAll);

router.get("/:id", controller.getId);

router.post("/cadastro", controller.cadastro);

router.patch("/:id/like", controller.updateLike);

router.patch("/:id/deslike", controller.updateDeslike);

router.delete("/:id/delete", controller.deleteEstabelecimento);

router.put("/:id/atualiza", controller.atualizacao);

module.exports = router;