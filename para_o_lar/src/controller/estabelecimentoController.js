const models = require("../models/estabelecimentos.json");

const getAll = (request, response) =>{

const {pagamento, bairro, delivery} = request.query

let filtrados = models

//filtro por pagamento

if(pagamento){
    filtrados = filtrados.filter(estabelecimento =>{
        return estabelecimento.pagamento.includes(pagamento)
    })
}

//filtro por bairro

if(bairro){
    filtrados = filtrados.filter(estabelecimento =>{
        return estabelecimento.bairro == bairro 
    })
}

//filtro por delivery

if(delivery){
    filtrados = filtrados.filter(estabelecimento =>{
        return estabelecimento.delivery == (delivery == "true" ? true : false)
    })
}   


response.status(200).send(filtrados)

}


const getId = (request, response)=>{
    const idSolicitado = request.params.id
    const found = models.find(estabelecimento => estabelecimento.id == idSolicitado)

    if(found == undefined){
        response.status(404).send({message: "Estabelecimento não encontrado"})
    }

    response.status(200).send(found)


}




module.exports = {
    getAll,
    getId
}