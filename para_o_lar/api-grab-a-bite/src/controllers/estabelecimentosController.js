const models = require('../models/estabelecimentos.json');

const createEstabelecimento = (req,res) => {
    const bodyRequest = req.body;

    const novoEstabelecimento = {
        id:models.length +1,
        likes:0,
        dislikes:0,
        nome:bodyRequest.nome,
        website:bodyRequest.website,
        categoria:bodyRequest.categoria,
        endereco:bodyRequest.endereco,
        numero: 100,
        bairro: bodyRequest.bairro,
        cidade: bodyRequest.cidade,
        telefone: bodyRequest.telefone,
        pagamento:bodyRequest.pagamento,
        delivery:bodyRequest.delivery
    }


    if(!bodyRequest.nome || !bodyRequest.categoria || !bodyRequest.cidade ||!bodyRequest.pagamento || !bodyRequest.delivery ){
        res.status(400).send("ERRO: Os campos nome, categoria, cidade, pagamento e delivery são obrigatórios.")
    }

    if((bodyRequest.telefone).length < 10){ //10 char for American Number
        res.status(400).send("ERRO: Telefone inválido")
    }

    models.push(novoEstabelecimento)

    res.status(201).json({
        "message":"Estabelecimento cadastrado com sucesso",
        "estabelecimento": novoEstabelecimento
    })
}

const getAll = (req, res) => {
    const {pagamento, categoria, delivery} = req.query

    let estabFound = models

    if(pagamento){
        estabFound = estabFound.filter(e => (e.pagamento).includes(pagamento))
    }

    if(categoria){
        estabFound = estabFound.filter(e => e.categoria.toLocaleLowerCase() == categoria.toLocaleLowerCase())
    }

    if(delivery){
        estabFound = estabFound.filter(e => e.delivery == (delivery == "true" ? true : false))
    } 

    res.status(200).send(estabFound)
}

const getById = (req, res) => {
    const {id} = req.params;

    estabelecimentoEncontrado = models.find( e => e.id == id)

    if(estabelecimentoEncontrado == undefined) {
        res.status(404).send('Estabelecimento não encontrado')
    } else{
        res.status(200).send(estabelecimentoEncontrado)
    }
}

const likeDislike= (req, res) => {
    const {id} = req.params
    estabelecimento = models.find(e => e.id == id)

    likeRequest = req.query.likes
    dislikeRequest = req.query.dislikes
    if( likeRequest == "true") estabelecimento.likes++
    if(dislikeRequest == "true") estabelecimento.dislikes++

    res.status(200).send(estabelecimento)
}

const atualizacao = (req, res) => {
    const {id} = req.params;
    estabFound = models.find(e => e.id == id)
    
    const likes = estabFound.likes
    const dislikes = estabFound.dislikes
    
    infoToUpdate = req.query
    Object.keys(infoToUpdate).forEach( key => {
        if(key != ""){
            estabFound[key] = infoToUpdate[key]
        }    
    })

    estabFound.id = id
    estabFound.likes = likes
    estabFound.dislikes = dislikes

    res.status(200).json({
        "message":"Estabelecimento atualizado com sucesso",
        estabFound})
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
    atualizacao,
    deleteEstabelecimento
}