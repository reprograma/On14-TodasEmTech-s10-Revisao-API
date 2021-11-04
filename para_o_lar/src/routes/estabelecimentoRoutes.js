// chamo o controller de estabelecimentos
const controllerEstab = require ("../controller/estabelecimentoController")

const express = require  ("express") // chamar o express para conseguir executar a função router
const router = express.Router() // função para executar a função Routes do express



//router.metado http ("/rota", função)
router.get("/estabelecimentos", controllerEstab.getAll)
router.get("/:id", controllerEstab.getId)
router.post("/cadastro", controllerEstab.cadastrar)
router.patch("/:id/like", controllerEstab.like)
router.patch("/:id/deslike", controllerEstab.deslike)




module.exports = router


