const express = require("express");
const controller = require('../controller/estabelecimentoController');
const router = express.Router();

router.get('/todos', controller.getAll);
router.get('/todos/:id', controller.getById);
router.post('/create', controller.create);




module.exports = router;