const models = require("../models/estabelecimentos.json");

const getAll = (request, response) => {

    const {pagamento, bairro, delivery} = request.query
    
    let filtrados = models

    //filtro por pagamento
    if (pagamento) {
        filtrados = filtrados.filter(estabelecimento => { 
            return estabelecimento.pagamento.includes(pagamento);
        });
    }

    //filtro poor bairro
    if (bairro) {
        filtrados = filtrados.filter(estabelecimento => {
            return estabelecimento.bairro.includes(bairro);
        });
    }

    //filtro por delivery
    if (delivery) {
        filtrados = filtrados.filter(estabelecimento => {
            return estabelecimento.delivery == (delivery == "true" ? true : false); 
        });
    }

    response.status(200).send(filtrados);
}

const getId = (request, response) => {

    const idSolicitado = request.params.id
    const found = models.find(estabelecimento => estabelecimento.id == idSolicitado)
    
    if (found == undefined) {
        response.status(404).send({message: "Estabelecimento não encontrado!"});
    }

    response.status(200).send(found);
}

const criarEstabelecimento = (request, response) => {
    let body = request.body;

    let novoEstabelecimento = {
        id : (models.length)+1,
        likes: body.likes,
        nome: body.nome,
        categoria: body.categoria,
        endereco : body.endereco,
        numero : body.numero,
        bairro : body.bairro,
        cidade : body.cidade,
        telefone : body.telefone,
        pagamento : body.pagamento,
        delivery : body.delivery
    }

    models.push(novoEstabelecimento);

    response.status(201).json(
        [
            {
                "mensagem" : "Novo estabelecimento criado com sucesso!",
                novoEstabelecimento
            }
        ]
    )
}


module.exports = {
    getAll,
    getId,
    criarEstabelecimento
}