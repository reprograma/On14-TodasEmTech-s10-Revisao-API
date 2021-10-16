const controller = require('../controllers/estabelecimentoController');
const express = require("express");
const router = express.Router();

router.get('/todos', controller.getAll.getAll)
router.get('/:id', controller.getId)

module.exports = router
