const express = require("express")
const controller = require("../controllers/estabelecimentosController")

const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/:id", controller.getId)

router.post("/cadastro", controller.createId)

module.exports = router
