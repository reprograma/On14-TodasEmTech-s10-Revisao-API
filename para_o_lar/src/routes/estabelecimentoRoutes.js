const express = require("express");
const controllers = require("../controllers/estabelecimentoControllers");
const router = express.Router();

router.get('/todos', controllers.getAll)
router.get('/:id', controllers.getId)

//atividade para o lar: post para cadastro de estabelecimento

router.post("/criar", controllers.createRegistration)

module.exports = router