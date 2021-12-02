const express = require("express")
const controller = require("../controller/cyberController")
const router = express.Router()


router.get("/", controller.getInit)
router.get("/cybers", controller.getAll)
router.get("/cybers/:id", controller.getId)
// router.get("/cybers",controller.getQuery)



module.exports = router