const express = require("express");
//const cors = require("cors");

const controller = require("../controller/estabelecimentoController")
const router = express.Router();

router.get("/todos", controller.getAll)
router.get("/id", controller.getId)
router.post("/criar", controller.createPost)
router.patch("/likes/:id", controller.atualizarLike)


module.exports = router