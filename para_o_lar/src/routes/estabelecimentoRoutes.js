const controller = require("../controllers/estabelecimentoController");

const express = require("express");

const router = express.Router();

router.get("/:todos", controller.getAll);

router.get("/:id", controller.getById);

router.post("/cadastro", controller.cadastro);

module.exports = router;