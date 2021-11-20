// chamar o controller e add o arquivo e da pasta 
const controllers = require('../controllers/estabelecimentoController')

// requerir o express
const express = require('express')

// add o express no route
const router = express.Router()

// criar rota 
router.get("/todos", controllers.getAll)
router.get("/:id", controllers.getId)
router.post("/cadastro", controllers.createMovie)
router.patch('/:id/like', controllers.like)
router.patch('/:id/deslike', controllers.deslike)
router.delete('/:id/remove', controllers.removeEstabelecimento)
router.put('/:id/atualiza', controllers.atualizacao)


module.exports = router
