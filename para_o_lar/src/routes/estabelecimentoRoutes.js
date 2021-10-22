const express = require("express")
const controller = require("../controller/estabelecimentoController")
const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/:id", controller.getId)

router.post("/cadastrar", controller.createEstabelecimento)


module.exports = router