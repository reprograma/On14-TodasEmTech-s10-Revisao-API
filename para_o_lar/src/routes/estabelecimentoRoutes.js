const express = require("express");
const controller = require("../controllers/estabelecimentoController");
const router = express.Router();

router.get("/todos", controller.getAll);

router.get("/:id", controller.getId);

router.post("/criar", controller.criarEstabelecimento);

router.patch("/updatelikes/:id", controller.updateLikes);

router.patch("/updatedeslikes/:id", controller.updateDeslikes);

router.delete("/deletar/:id", controller.deletarEstabelecimento);

router.put("/atualizar/:id", controller.atualizarEstabelecimento);

module.exports = router;
