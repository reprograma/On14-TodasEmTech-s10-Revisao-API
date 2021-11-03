const controllers = require("../controllers/estabelecimentoController")
const express = require("express")

const router = express.Router()

router.get("/todos", controllers.getAll)
router.get("/:id", controllers.getId)

router.post("/cadastro", controllers.cadastrar)

router.patch("/:id/likes", controllers.likes)
router.patch("/:id/deslikes", controllers.deslikes)
router.patch("/likes/:id", controllers.updateLikes)

router.delete("/:id/remove", controllers.removeEstabelecimento)

router.put("/:id/update", controllers.update)
router.put("/:id/updateBolean", controllers.updateWithBolean)

module.exports = router