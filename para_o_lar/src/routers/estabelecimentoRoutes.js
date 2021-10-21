const express = require("express")
const { route } = require("../app")
const controller = require("../controllers/estabelecimentoControllers")
const router = express.Router()

route.get("/todos", controller.getAll)
router.get("/:id", controller.getId)

module.exports = router
