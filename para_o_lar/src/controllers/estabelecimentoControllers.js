const model = require("../models/estabelicimentos.json")

const getAll = (req, res) => {
    res.status(200).send(model)
}


module.exports = {
    getAll 
}