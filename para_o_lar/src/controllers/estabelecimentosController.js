const models = require ("../models/estabelecimentos.json");

const getAll =(require, response) =>{
    const {pagamento, bairro} = require.query 
    let filtrados = models 

    if (pagamento){
        filtrados = filtrados.filter(estabelecimento =>{
            return estabelecimento.pagamento.includes(pagamento)
        })
    }


    if (bairro){
        filtrados =filtrados.filter(estabelecimento =>{
            return estabelecimento.bairro == bairro
        })
    }
}

const getId = (require, response) => {
     const idSolicitado = require.params.id

     const found = models.find(estabelecimento => estabelecimento.id == idSolicitado)
     
     if(found == undefined){
         response.status(404).send({message: "Estabelecimeto não encontrado"})
     }
     response.status(200).send(found)
}

const createId =(request, response)=>{
    const body = request.body

    let newId = {
        id: (models.length) +1,
        categoria: body.categoria,
        rate: body.rate,
        nome: body.nome,
        endereço: body.endereço,
        numero: body.numero,
        bairro: body.bairro,
        cidade: body.cidade,
        telefone: body.telefone,
        pagamento: body.pagamento,
    }

    models.push(newId)

    response.status(201).json(
        [
            {
                "mensagem":"Estabelecimento cadastrado com sucesso.",
                newId
            }
        ]
    )
}

module.exports = {
    getAll,
    getId,
    createId
}
