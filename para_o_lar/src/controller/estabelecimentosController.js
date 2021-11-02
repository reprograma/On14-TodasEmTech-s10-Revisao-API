const models = require('../models/estabelecimentos.json');

const getAll = (req, res) => {
    const { pagamento, bairro, delivery, likes } = req.query

    let filtrados = models

    //filtrando por pagamento
    if (pagamento){
        filtrados = filtrados.filter(estabelecimento => {
            return estabelecimento.pagamento.includes(pagamento)
        })
    }

    //filtrando por bairro
    if (bairro){
        filtrados = filtrados.filter(estabelecimento =>{
            return estabelecimento.bairro == bairro
        })
    }
    //filtrando por delivery
    if(delivery) {
        filtrados = filtrados.filter(estabelecimento =>{
            return estabelecimento.delivery == (delivery == 'true' ? true : false)
        })
    }
    res.status(200).send(filtrados)
}

const getId = (req, res) => {
    const idSolicitado = req.params.id
    const found = models.find(estabelecimento => estabelecimento.id == idSolicitado)

    if(found == undefined){
        res.status(404).send({message: "Estabelecimento não encontrado"})
    }

    res.status(200).send(found)

}

//cadastro de novos estabelecimentos:
const cadastroEstabelecimento = (req, res) => {
    let body = req.body;
    let novoEstabelecimento = {
        id: (models.length)+1,
        likes: body.likes,
        nome: body.nome,
        categoria: body.categoria,
        endereco: body.endereco,
        numero: body.numero,
        bairro: body.bairro,
        cidade: body.cidade,
        telefone: body.telefone,
        pagamento: body.pagamento,
        delivery: body.delivery
    }
    if(!body.nome || !body.pagamento || !body.cidade){
        return res.status(400).send({mensagem: "Algum campo obrigatório não foi preenchido."})
    }
    if(body.nome.length > 10){
        return res.status(400).send({mensagem: "Você ultrapassou o limite de 10 caracteres"})
    }

    models.push(novoEstabelecimento);
    res.status(201).json(
        [
            {
                "mensagem": "Estabelecimento cadastrado!",
                novoEstabelecimento
            }
        ]
    )
}
//adicionando like
const adicionaLike = (req, res) => {

    const { id } = req.params;
    const found = models.find(estabelecimento => estabelecimento.id == id);
    if (found == undefined) {

        res.status(404).send({message: "Estabelecimento não encontrado."});
        
    }
    found.likes += 1;

    res.status(200).send(found);

}

//adicionando deslike
const adicionaUnlike = (req, res) => {

    const { id } = req.params;
    const found = models.find(estabelecimento => estabelecimento.id == id);
    if (found == undefined) {

        res.status(404).send({message: "Estabelecimento não encontrado."});
        
    }
    
    found.likes -= 1;
    
    res.status(200).send(found);

}
//deletar estabelecimento
const removeEstabelecimento = (req, res) =>{
    const id = req.params.id
    const found = models.find(estabelecimento => estabelecimento.id == id)

    if(found == undefined){
        res.status(404).send({message: "Estabelecimento não encontrado"})
    }
}
//atualizar estabelecimento
const atualizacao = (req, res)=>{
    const idRequest = req.params.id
    const bodyRequest = req.body
    const found = models.find(estabelecimento => estabelecimento.id == idRequest)

    if(found == undefined){
        res.status(404).send({message: "Estabelecimento não encontrado"})
    }
    bodyRequest.id = idRequest

    Object.keys(found).forEach((informacao)=> {
        if(bodyRequest[informacao] == undefined){
            found[informacao] = found[informacao]
        } else {
            found[informacao] = bodyRequest[informacao]
        }
    })
}



module.exports = {
    getAll,
    getId,
    cadastroEstabelecimento,
    adicionaLike,
    adicionaUnlike,
    removeEstabelecimento,
    atualizacao
}