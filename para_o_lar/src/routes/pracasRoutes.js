const controller = require("../controller/pracasController");

const express = require("express");
const router = express.Router();

router.get("/pracas", controller.getAll);
router.get("/:id", controller.getId);
router.post("/criar", controller.registerPracas);

module.exports = router;
