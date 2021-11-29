const express = require("express");
const controller = require("../controllers/estabelecimentosController");
const router = express.Router();

router.get("/all", controller.getAll);
router.get("/ritmos", controller.ritmo);
router.patch("/atualizar/:id", controller.updatePhone);
router.post("/adicionar/:id", controller.createEstabelecimento);
router.delete("/delete/:id", controller.deleteEstabelecimento);
router.get("/:id", controller.getId);
router.post("/like/:id", controller.like);
router.post("/dislike/:id", controller.dislike);
module.exports = router;
