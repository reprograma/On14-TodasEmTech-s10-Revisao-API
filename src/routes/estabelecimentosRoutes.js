const express = require("express");
const controller = require("../controllers/estabelecimentosController");
const router = express.Router();

router.get("/all", controller.getAll);
router.get("/ritmos", controller.ritmo);
router.patch("/atualizar", controller.updatePhone);
router.post("/adicionar", controller.createEstabelecimento);
router.delete("/delete", controller.deleteEstabelecimento);
router.get("/:id", controller.getId);
router.post("/like", controller.like);
router.post("/dislike", controller.dislike);
module.exports = router;
