const express = require("express")
const cors = require("cors")
const estabelecimentoRouter = require("./routers/estabelecimentoRouters")

const app = express()
app.use(cors())
app.use(express.json())
app.use("/estabelecimento", estabelecimentoRouter)

module.exports = app