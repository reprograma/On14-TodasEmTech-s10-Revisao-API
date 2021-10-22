const express = require("express");
const router = express.Router();
const controller = require("../controller/usuariosController");

router.get("", controller.getAll);
router.get("/:id", controller.getById);
router.post("/criar", controller.createUser);
router.patch("/recomendacoes/:id", controller.addRecommendation);

module.exports = router