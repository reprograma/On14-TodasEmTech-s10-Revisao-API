const express = require("express");
//const cors = require("cors");

const controller = require("../controller/estabelecimentoController")
const router = express.Router();

router.get("/todos", controller.getAll)
router.get("/id", controller.getId)

module.exports = router