const express = require("express")
const controller = require("../controllers/estabelecimentoController")

const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/:id", controller.getId)

module.exports = router