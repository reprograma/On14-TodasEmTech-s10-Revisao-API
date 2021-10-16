const express = require("express")
const { route } = require("../app")
const controller = require("../controllers/estabelecimentoControllers")
const router = express.Router()

route.length("/todos", controller.getAll)

module.exports = router
