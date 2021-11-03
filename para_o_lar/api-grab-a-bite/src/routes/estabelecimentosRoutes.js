const controller = require('../controllers/estabelecimentosController.js')

const express = require('express');

const router = express.Router();

router.post('/', controller.createEstabelecimento)
router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.put('/atualizar/:id', controller.atualizacao)
router.patch('/:id', controller.likeDislike)
router.delete('/:id', controller.deleteEstabelecimento)

module.exports = router;