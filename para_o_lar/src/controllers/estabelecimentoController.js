const models = require("../models/estabelecimento.json")
const fs = require("fs")

const write = (request, response) => {
    fs.writeFile("./src/models/estabelecimento.json", JSON.stringify(models), 'utf8', function (err){
    if(err){
        return response.status(500).send({message: err})
    }
} 
)}

const getAll = (request, response) => {
    const { pagamento, bairro, delivery } = request.query

    let filtrados = models

    // filtro por pagamento

    if (pagamento){
        filtrados = filtrados.filter(estabelecimento => {
            return estabelecimento.pagamento.includes(pagamento)
        })
    }

    //filtro por bairro

    if (bairro) {
        filtrados = filtrados.filter(estabelecimento => {
            return estabelecimento.bairro == bairro
        })
    }

    //filtro por delivery

    if (delivery) {
        filtrados = filtrados.filter(estabelecimento => {
            return estabelecimento.delivery == (delivery == "true" ? true: false)
        })
    }

    response.status(200).send(filtrados)
}

//get por ID

const getId = (request, response) => {
    const idSolicitado = request.params.idSolicitado
    
    const found = models.find(estabelecimento => estabelecimento.id == idSolicitado)

    if(found == undefined){
        response.status(404).send({message: "Estabelecimento não encontrado"})
    }

    response.status(200).send(found)

}

// post
const cadastrar = (request, response) => {
    const body = request.body

    let novoEstabelecimento = {
        id: (models.length)+1,
        likes: body.likes,
        nome: body.nome,
        categoria: body.categoria,
        endereço: body.endereço,
        numero: body.numero,
        bairro: body.bairro,
        cidade: body.cidade,
        telefone: body.telefone,
        pagamento: body.pagamento,
        delivery: body.delivery
    }    

    if(!body.nome || !body.pagamento || !body.cidade){
        return response.status(400).send({message: "Algum campo obrigatório não foi preenchido"})
    }

    if(body.nome.length > 10){
        return response.status(400).send({message: "Você ultrapassou o limite de 10 caracteres"})
    }
    models.push(novoEstabelecimento)
    write ()

    response.status(201).json(
        [{
            "mensagem": "Estabelecimento cadastrado com sucesso",
            novoEstabelecimento
        }]
    )
}

const likes = (request, response) => {
    const id = request.params.id // const { id } = request.params

    const found = models.find(estabelecimento => estabelecimento.id == id)

    if(found == undefined){
        response.status(404).send({"mensagem": "estabelecimento não encontrado"})
    }

    found.likes += 1 //números de curtidas que será somado ao fazer o patch
    write ()
    response.status(200).send(found)

}

const deslikes = (request, response) => {
    const id = request.params.id // const { id } = request.params

    const found = models.find(estabelecimento => estabelecimento.id == idSolicitado)

    if(found == undefined){
        response.status(404).send({"mensagem": "estabelecimento não encontrado"})
    }

    found.deslikes -= 1
    write ()

    response.status(200).send(found)

}

const updateLikes = (request, response) => {
    const idRequest = request.params.id
    let likeRequest = request.body.likes

    estabelecimentoEncontrado = models.find(local => local.id == idRequest)

    let like = estabelecimentoEncontrado.likes + likeRequest

    estabelecimentoEncontrado.likes = like
    write ()

    response.status(200).json(
        [{
            "message": "Você gostou disso",
            models
        }]

    )
}

//delete
const removeEstabelecimento = (request, response) => {
    const id = request.params.id 
    const found = models.find(estabelecimento => estabelecimento.id == idRequest)

    if(found == undefined){
    response.status(404).send({mensage: "Estabelecimento não encontrado"})

}
    const index = models.indexOf(found)
    models.splice(index,1)

    Write()
    response.status(204).send([
        {
            message: "Estabelecimento removido com sucesso",  //pra retornar 200, 204 não retorna a msg
            found
        }
    ])
}

//put
const update = (request, response) => {
    const idRequest = request.params.id
    const found = models.find(estabelecimento => estabelecimento.id == idRequest)

    if(found == undefined){
        response.status(404).send({mensage: "Estabelecimento não encontrado"})
    }    

    const {nome, categoria, endereço, numero, bairro, cidade, telefone, pagamento, delivery} = request.body
    
    found.nome = nome || found.nome
    found.categoria = categoria || found.categoria
    found.endereço = endereço || found.endereço
    found.numero = numero || found.numero
    found.bairro = bairro || found.bairro
    found.cidade = cidade || found.cidade
    found.telefone = telefone || found.telefone
    found.pagamento = pagamento || found.pagamento
    found.delivery = delivery || found.delivery


    response.status(200).json(
        [{
            "message": "Dados atualizados",
            found
        }]
    )
}

//put para boleano também 
const updateWithBolean = (request, response) => {
    const idRequest = request.params.id
    const bodyRequest = request.body

    const found = models.find(estabelecimento => estabelecimento.id == idRequest)

    if(found == undefined){
        response.status(404).send({message: "Estabelecimento não encontrado"})
    }
    bodyRequest.id = idRequest

    Object.keys(found).forEach((informacao) => {
        if(bodyRequest[informacao] == undefined){
            found[informacao] = found[informacao]
        }else {
            found[informacao] = bodyRequest[informacao]
        }
    })
    
    response.status(200).send(found)
}


module.exports = {
    getAll,
    getId,
    cadastrar,
    likes,
    deslikes,
    updateLikes,
    removeEstabelecimento,
    update,
    updateWithBolean
}