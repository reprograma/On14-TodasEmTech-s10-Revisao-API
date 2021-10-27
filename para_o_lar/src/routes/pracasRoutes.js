const controller = require("../controller/pracasController");

const express = require("express");
const router = express.Router();

router.get("/pracas", controller.getAll);
router.get("/:id", controller.getId);
router.post("/criar", controller.registerPracas);
router.put("/update/:id", controller.update);
router.patch("/comercio/:id", controller.updateComercio);
router.delete("/delete/:id", controller.deletePraca);
router.post("/praca/:id/seguranca/perigoso", controller.updatePerigo);
router.post("/praca/:id/seguranca/tranquilo", controller.updateTranquilo);

module.exports = router;
