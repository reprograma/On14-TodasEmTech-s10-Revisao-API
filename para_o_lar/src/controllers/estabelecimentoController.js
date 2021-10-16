const models = require('../models/estabelecimentos.json');

const getAll = (req, res) => {
    res.status(200).send(models)
}

const getId = (req, res) => {
    const idSolicitado = req.params.id

    const found  = models.find(estabelecimento => estabelecimento.id == idSolicitado)

    if(found == undefined){
        res.status(404).send({message: "Estabelecimento não encontrado"})
    }

    res.status(200).send(found)
}

module.exports = {
    getAll,
    getId
}