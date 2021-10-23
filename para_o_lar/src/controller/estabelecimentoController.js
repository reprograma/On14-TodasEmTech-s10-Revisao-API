const models = require("../models/estabelecimentos.json");

const fs = require("fs");
const { response } = require("express");

const write = (request, response)=>{
    fs.writeFile("./src/models/estabelecimentos.json",JSON.stringify(models),'utf8',function(err){
    if(err){
        return response.status(500).send({message:err})
    }
})
}


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

const createPost = (request, response) =>{
    
    let criarEstabelecimento = request.body

    const novoEstabelecimento = {
        id: (models.length)+1,
        likes: criarEstabelecimento.likes,
        nome: criarEstabelecimento.nome,
        categoria: criarEstabelecimento.lanchonete,
        endereço: criarEstabelecimento.endereço,
        numero: criarEstabelecimento.numero,
        bairro: criarEstabelecimento.bairro,
        cidade: criarEstabelecimento.cidade,
        telefone: criarEstabelecimento.telefone,
        pagamento: criarEstabelecimento.pagamento,
        delivery: criarEstabelecimento.delivery

    }

    models.push(novoEstabelecimento)


    write()
    
    response.status(200).json(
        [{
            "mensagem": "novo estabelecimento", novoEstabelecimento
        }]
    )
}


//verbo patch
const atualizarLike = (request, response) =>{
    let idRequest = request.params.id

    let likeRequest = request.body.likes

    let estabEncontrado = models.find(estab => estab.id == idRequest)

    let like = estabEncontrado.likes + likeRequest

    estabEncontrado.likes = like


    write()
    
    response.status(200).json(
    [{
        mensagem: "like atualizado", 
        models
    }]
    )
}

module.exports = {
    getAll,
    getId,
    createPost,
    atualizarLike
}