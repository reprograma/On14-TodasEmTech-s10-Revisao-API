const controller = require("../controller/pracasController");

const express = require("express");
const router = express.Router();

router.get("/pracas", controller.getAll);
router.get("/:id", controller.getId);
router.post("/criar", controller.registerPracas);
router.put("/update/:id", controller.update);
router.patch("/comercio/:id", controller.updateComercio);
router.delete("/delete/:id", controller.deletePraca);
router.post("/praca/:id/check-in", controller.checkIn);
router.post("/praca/:id/seguranca/perigoso", controller.updatePerigo);
router.post("/praca/:id/seguranca/tranquilo", controller.updateTranquilo);
router.post("/praca/:id/publico/animais", controller.updateAnimais);
router.post("/praca/:id/publico/idosos", controller.updateIdosos);
router.post("/praca/:id/publico/namorados", controller.updateNamorados);
router.post(
  "/praca/:id/publico/atividade-fisica",
  controller.updateAtividadeFisica
);
router.post("/praca/:id/limpeza/limpo", controller.updateLimpo);
router.post("/praca/:id/limpeza/sujo", controller.updateSujo);
router.post(
  "/praca/:id/conservacao/precisa-manutencao/paisagismo",
  controller.updatePaisagismo
);
router.post(
  "/praca/:id/conservacao/precisa-manutencao/equipamentos",
  controller.updateEquipamento
);
router.post(
  "/praca/:id/conservacao/precisa-manutencao/pintura",
  controller.updatePintura
);
router.post(
  "/praca/:id/quadra-esportes/basquete",
  controller.updateQuadraBasquete
);
router.post(
  "/praca/:id/quadra-esportes/futebol",
  controller.updateQuadraFutebol
);
router.post("/praca/:id/quadra-esportes/volei", controller.updateQuadraVolei);
router.post("/praca/:id/quadra-esportes/outros", controller.updateQuadraOutros);
router.post("/praca/:id/quadra-esportes/nao", controller.updateQuadraNao);

module.exports = router;
