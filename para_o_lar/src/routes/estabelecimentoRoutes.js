const express = require("express")
const controller = require("../controllers/estabelecimentoController")

const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/:id", controller.getId)


router.post("/cadastro", controller.createLocal)
router.post("/:id/curtidas", controller.like)

router.patch("/likes/:id", controller.updateLike)

module.exports = router