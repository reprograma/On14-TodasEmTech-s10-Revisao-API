// chamo o controller de estabelecimentos
const controller = require ("../controller/vetController")

const express = require  ("express") // chamar o express para conseguir executar a função router
const router = express.Router() // função para executar a função Routes do express

//router.metado http ("/rota", função)
router.get("/clinicas",controller.getAll)
router.get("/:id", controller.getId)
router.post("/cadastro", controller.cadastrar)
router.delete("/:id/delete", controller.deletarClinica)
router.put("/:id/atualizacao", controller.atualizacao)
router.patch("/:id/like", controller.like)
router.patch("/:id/deslike", controller.deslike)




module.exports = router


