const models = require ("../models/estabelecimentos.json")

const getAll = (req, res) => {
    response.status(200).send(models)
}

const getId = (req, res) => {
    const idSolicitado = req.params.idSolicitado
    // const {id} = req.params outra forma de fazer por ID subtituindo a linha acima
    
    const found = models.find(estabelecimento => estabelecimento.id == idSolicitado )
    
    if(found == undefined){
        res.status(404).send({message: "Estabelecimento não encontado" })
    }
    
    res.status(200).send(found)
}

// FAZER UM POST = CREATE



module.exports = {
    getAll,
    getId
}