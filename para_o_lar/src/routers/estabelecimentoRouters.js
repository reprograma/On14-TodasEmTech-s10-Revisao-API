const express = require("express")
const controller = require("../controllers/estabelecimentoControllers")
const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/:id", controller.getId)
router.post("/criar", controller.createEstabelecimento)
// router.patch("/like/:id", controller.like)
router.patch("/likes/:id/?", controller.likeEDeslike)

module.exports = router
