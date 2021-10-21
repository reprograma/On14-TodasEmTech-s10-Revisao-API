const models = require("../models/estabelicimentos.json")

const getAll = (req, res) => {
    res.status(200).send(models)
}

const getId = (req, res) => {
    const IdSolicitado = req.params.id
    const found = models.find(estabeleciamento => estabeleciamento.id == IdSolicitado)
    
    if(found == undefined){
        res.status(404).send({message: "Estabelecimento não encontrado"})
    }
    res.status(200).send(found)
}


module.exports = {
    getAll,
    getId
}