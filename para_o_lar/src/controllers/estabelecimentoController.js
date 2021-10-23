//return é para jogar para fora da função
const models = require ("../models/estabelecimentos.json")
const fs = require("fs")
const write = (request, response) =>{fs.writeFile("./src/models/estabelecimentos.json", JSON.stringify(models),'utf8', function (err){
    if(err){
        return response.status(500).send({message: err});
    }
})}

const getAll = (req, res) => {
    // transformar todos os itens abaixo do json em const
    const {pagamento, bairro, delivery} = req.query
    
    let filtrados = models //usar let, pq dependendo do filtro ela vai mudar
    
    //filtro por pagamento
    if (pagamento){
        filtrados = filtrados.filter(estabelecimento => {
            return estabelecimento.pagamento.includes(pagamento) //includes retorna perquisa como true or false // usa includes qdo é array
        })
    }

    //filtro por bairro
    if(bairro){
        filtrados = filtrados.filter(estabelecimento => {
            return estabelecimento.bairro == bairro
        })
    }

    //filtro por delivery
    if(delivery) {
        filtrados = filtrados.filter(estabelecimento => {
            return estabelecimento.delivery == (delivery == "true" ? true : false)// usa condição para identificar a string
        })
    }

    res.status(200).send(filtrados)
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

// FAZER UM POST = nome deverá ser cadastro de estabelecimento

const createLocal = (request, response) => {
    const body = request.body

    let newLocal = {
        id: (models.length) +1,
        likes: body.likes,
        nome: body.nome,
        categoria: body.categoria,
        numero: body.numero,
        bairro: body.bairro,
        cidade: body.cidade,
        telefone: body.telefone,
        pagamento: body.pagamento,
        delivery: body.delivery
    }
    models.push(newLocal)
    write ()
    response.status(200).json(
        [{
            "mensagem":"Estabelecimento cadastrado com sucesso!",
            newLocal
        }]
    )

}


// LIKE E DESLIKE = Ver a logica, pegar por Id (igual get all) e fazer a logica de acrescentar e diminuir, colocar erro 404 se o usuario colocar um id que nao existe


//PATCH 
const updateLike = (request, response) => {
    const idRequest = request.params.id
    let likeRequest = request.body.likes

    localEncontrado = models.find(local => local.id == idRequest)

    let like = localEncontrado.likes + likeRequest

    localEncontrado.like = like


    response.status(200).json(
        [{
            "message":"Você gostou disso",
            models
        }]
    )
}


module.exports = {
    getAll,
    getId,
    updateLike,
    createLocal
}