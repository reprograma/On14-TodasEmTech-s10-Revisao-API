const controller = require("../controllers/estabelecimentoController");
const express = require("express");
const router = express.Router();

router.get("/todos", controller.getAll);
router.get("/:id", controller.getById);
router.patch("/like/:id", controller.updateLikes);
router.post("/create", controller.create);

module.exports = router;
