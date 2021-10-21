const models = require("../models/estabelecimentos.json")

const getAll = (req, res) => {
    const { pagamento, bairro, delivery } = req.query
    let filtrados = models

    if(pagamento){
        filtrados = filtrados.filter(estabeleciamento => {
            return estabeleciamento.pagamento.includes(pagamento)
        })
    }

    if(bairro){
        filtrados = filtrados.filter(estabeleciamento => {
            return estabeleciamento.bairro == bairro
        })
    }

    if(delivery){
        filtrados = filtrados.filter(estabeleciamento => {
            return estabeleciamento.delivery == (delivery == "true" ? true : false)
        })
    }
    res.status(200).send(filtrados)
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