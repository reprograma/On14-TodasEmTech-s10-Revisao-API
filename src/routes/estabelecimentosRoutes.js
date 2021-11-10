const express = require("express");
const controller = require("../controllers/estabelecimentosController");
const router = express.Router();

router.get("/all", controller.getAll);
router.get("/ritmos", controller.ritmo);
//router.patch("/like", controller.patchLike);
;//colocar por último para não dar erro
router.patch("/atualizar", controller.updatePhone);
router.post("/adicionar", controller.createEstabelecimento);
router.delete("/delete",controller.deleteEstabelecimento)
router.get("/:id", controller.getId)
module.exports = router;
//

/*router.post('/:id/like', controller.like)
router.post('/:id/dislike', controller.dislike)*/
