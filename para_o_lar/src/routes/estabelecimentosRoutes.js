const express = require("express")
const controller = require("../controller/estabelecimentosController")
const router = express.Router()

router.get('/todos', controller.getAll)
router.get('/buscar/:id', controller.getId)
router.post('/cadastro', controller.cadastrar)
router.patch('/:id/like', controller.like)
router.patch('/:id/deslike', controller.deslike)
router.delete('/:id/remove', controller.removeEstabelecimento)
router.put('/:id/atualiza', controller.atualizacao) 

module.exports = router