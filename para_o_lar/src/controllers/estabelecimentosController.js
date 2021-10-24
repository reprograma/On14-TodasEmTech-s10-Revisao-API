const models = require('../models/estabelecimentos.json');

const createEstabelecimento = (req,res) => {
    const bodyRequest = req.body;

    const novoEstabelecimento = {
        id:models.length +1,
        likes:bodyRequest.likes,
        nome:bodyRequest.nome,
        categoria:bodyRequest.categoria,
        endereco:bodyRequest.endereco,
        numero: 100,
        bairro: bodyRequest.bairro,
        cidade: bodyRequest.cidade,
        telefone: bodyRequest.telefone,
        pagamento:bodyRequest.pagamento
    }

    models.push(novoEstabelecimento)

    res.status(201).json({
        "message":"Estabelecimento cadastrado com sucesso",
        "estabelecimento": novoEstabelecimento
    });
}

const getAll = (req, res) => {
    const {pagamento, bairro, delivery} = req.query

    let estabFound = models

    if(pagamento){
        estabFound = estabFound.filter(e => e.pagamento.includes(pagamento))
    }

    if(bairro){
        estabFound = estabFound.filter(e => e.bairro == bairro)
    }

    if(delivery){
        estabFound = estabFound.filter(e => e.delivery == (delivery == "true" ? true : false))
    } //         estabDelivery = models.filter( e => e.delivery) //true implícito

    res.status(200).send(estabFound)
}

const likeDislike= (req, res) => {
    const {id} = req.params
    estabelecimento = models.find(e => e.id == id)

    likeRequest = req.query.likes
    dislikeRequest = req.query.dislike
    if( likeRequest == "true") estabelecimento.likes++
    if(dislikeRequest == "true") estabelecimento.dislikes++

    res.status(200).send(estabelecimento)
}

const getById = (req, res) => {
    const {id} = req.params;

    estabelecimentoEncontrado = models.find( e => e.id == idRequest)

    if(estabelecimentoEncontrado == undefined) {
        res.status(404).send('Estabelecimento não encontrado')
    } else{
        res.status(200).send(estabelecimentoEncontrado)
    }
}


const deleteEstabelecimento = (req, res) => {
    const {id} = req.params

    estabFound = models.find( e => e.id == id)

    models.splice(models.indexOf(estabFound), 1)

    res.status(200).json({
        "message": "Estabelecimento excluído com sucesso",
        "estabelecimento":estabFound
    })
}

module.exports = {
    createEstabelecimento,
    getAll,
    getById,
    likeDislike,
    deleteEstabelecimento
}