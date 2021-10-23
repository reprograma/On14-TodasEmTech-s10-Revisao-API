const { request } = require('../app');
const models = require ('../models/estabelecimentos.json');

const getAll = (req, res) => {
    
    res.status(200).send(models)
}


const getId = (req, res) => {
    const idSolicitado = req.params.id
    // const {id} = req.params outra forma de fazer por ID subtituindo a linha acima
    
    const found = models.find(estabelecimento => estabelecimento.id == idSolicitado)
    
    if(found == undefined){
        res.status(404).send({message: 'Estabelecimento não encontado'})
    }
    
    res.status(200).send(found)
}

// FAZER UM POST = CREATE

const criarEstabelecimento = (request, response)=>{
    let body = request.body
    console.log(body);
    let novoEstabelecimento ={
    "id": (models.length)+1,
    "nome": body.nome,
    "categoria": body.categoria,
    "endereco": body.endereco,
    "bairro": body.bairro,
    "cidade": body.cidade,
    "telefone": body.telefone,
    "pagamento": body.pagamento,
    "delivery": body.delivery
    }
    
    console.log(criarEstabelecimento);
    models.push(criarEstabelecimento)

    response.status(201).send(
        [
            {
                "mensagem": "estabelecimento criado com sucesso",
                criarEstabelecimento
            
            }
        ]
        )
}
module.exports = {
    getAll,
    getId,
    criarEstabelecimento
}
