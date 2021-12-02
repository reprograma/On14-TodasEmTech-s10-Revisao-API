const express = require("express")
const cors = require("cors")
const cyberRouters = require ("./routes/cyberRoutes")
const app = express()


app.use(cors())
app.use(express.json())

app.use("/", cyberRouters)
app.use("/cybers", cyberRouters)





module.exports = app