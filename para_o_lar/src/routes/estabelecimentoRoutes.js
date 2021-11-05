const express = require("express");
const controllers = require("../controllers/estabelecimentoControllers");
const router = express.Router();

router.get('/todos', controllers.getAll)
router.get('/:id', controllers.getId)

//atividade para o lar: post para cadastro de estabelecimento

router.post("/criar", controllers.createRegistration)

// like 
router.patch('/:id/like', controllers.like)

// deslike
router.patch('/:id/deslike', controllers.deslike)

router.delete('/:id/remove', controllers.removeEstabelecimento)

router.put('/:id/atualiza', controllers.atualizacao)

module.exports = router