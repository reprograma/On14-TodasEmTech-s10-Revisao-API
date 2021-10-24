const controller = require('../controllers/estabelecimentosController.js')

const express = require('express');

const router = express.Router();

router.post('/criar', controller.createEstabelecimento)
router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.patch('/likes/:id', controller.likeDislike)
router.delete('/delete/:id', controller.deleteEstabelecimento)

module.exports = router;