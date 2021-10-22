const express = require("express");

const controller = require('../controller/estabelecimentosController');

const router = express.Router();


router.get('/todos', controller.getAll)
router.get('/:id ',controller.getId)
router.post("/criar",controller.cadastrar)


module.exports = router