const express = require("express");
const controller = require('../controller/estabelecimentoController');
const router = express.Router();

router.get('/todos', controller.getAll);
router.get('/todos/:id', controller.getById);
router.post('/create', controller.create);
router.patch('/:id/likes', controller.likesUpdate);
router.patch('/:id/deslike', controller.deslikesUptade);
router.put('/update/:id', controller.updateGym);
router.delete('/:id/delete', controller.deleteGym);




module.exports = router;