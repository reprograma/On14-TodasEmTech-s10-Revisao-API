const controller = require("../controllers/estabelecimentoController");

const express = require("express");

const router = express.Router();

router.get("/:estabelecimentos", controller.getAll);
router.get("/:id", controller.getById);

module.exports = router;