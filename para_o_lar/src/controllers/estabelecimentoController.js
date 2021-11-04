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

    if (!body.nome || !body.categoria || !body.telefone) {
        return response.status(400).send({mensagem: "Algum campo obrigatório não foi preenchido! Por favor, repita todo o cadastro."});
    }

    if (body.nome.length > 10){
        return response.status(400).send({mensagem: "Você ultrapassou os limites de caracteres do campo >nome<"});
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

const updateLikes = (request, response) => {
    const idRequest  = request.params.id;
    const estabelecimentoFound = models.find(estabelecimento => estabelecimento.id == idRequest);

    if (estabelecimentoFound == undefined) {
        response.status(404).send({message: "Estabelecimento não encontrado!"});
    }

    estabelecimentoFound.likes += 1;

    response.status(200).json(
        [
            {
                "mensagem" : "Likes do estabelecimento atualizado!",
                estabelecimentoFound
            }
        ]
    )
}

const updateDeslikes = (request, response) => {
    const idRequest  = request.params.id;
    const estabelecimentoFound = models.find(estabelecimento => estabelecimento.id == idRequest);

    if (estabelecimentoFound == undefined) {
        response.status(404).send({message: "Estabelecimento não encontrado!"});
    }

    estabelecimentoFound.likes -= 1;

    response.status(200).json(
        [
            {
                "mensagem" : "Likes do estabelecimento atualizado!",
                estabelecimentoFound
            }
        ]
    )
}

const deletarEstabelecimento = (request, response) => {
    const idRequest  = request.params.id;
    const estabelecimentoFound = models.find(estabelecimento => estabelecimento.id == idRequest);

    if (estabelecimentoFound == undefined) {
        response.status(404).send({message: "Estabelecimento não encontrado!"});
    }

    const indexEncontrado = models.indexOf(estabelecimentoFound);

    models.splice(indexEncontrado, 1);

    response.status(200).send({mensagem: "Estabelecimento deletado!"});
}

const atualizarEstabelecimento = (request, response) => {
    const idRequest  = request.params.id;
    const bodyRequest = request.body;
    const estabelecimentoFound = models.find(estabelecimento => estabelecimento.id == idRequest);
   
    if (estabelecimentoFound == undefined) {
        response.status(404).send({message: "Estabelecimento não encontrado!"});
    }

   bodyRequest.id = idRequest;

   Object.keys(estabelecimentoFound).forEach((chave) => {

       if (bodyRequest[chave] == undefined){
           estabelecimentoFound[chave] = estabelecimentoFound[chave]
       } 
       else {
           estabelecimentoFound[chave] = bodyRequest[chave]
       }
   })   

    response.status(200).send(
        [
            {
                mensagem: "Estabelecimento atualizado com sucesso!",
                estabelecimentoFound
            }
        ]
    )    
}

module.exports = {
    getAll,
    getId,
    criarEstabelecimento,
    updateLikes,
    updateDeslikes,
    deletarEstabelecimento,
    atualizarEstabelecimento
}