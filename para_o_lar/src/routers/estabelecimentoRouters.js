const express = require("express")
const controller = require("../controllers/estabelecimentoControllers")
const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/:id", controller.getId)

module.exports = router
