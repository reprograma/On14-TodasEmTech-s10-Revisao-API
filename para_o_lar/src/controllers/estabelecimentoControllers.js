const models = require('../models/estabelecimentos.json');

const getAll = (req, res) => {

    const { pagamento, bairro, delivery } = req.query // aqui coloca todas as categorias do json   
    
    let filtrados = models //filtros por pagamentos

    if (pagamento) {
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

if(delivery){
    filtrados = filtrados.filter(estabelecimento => {
        return estabelecimento.delivery == (delivery == 'true'? true : false) // assim fica completo retorna true ou false. mas retornou só colocando delivery sem parenteses e sem nada
    })
}
    res.status(200).send(filtrados)

}

const getId = (req, res) => {
    const idSolicitado = req.params.id // é igual const { id } = req.params

    const found = models.find(estabelecimento => estabelecimento.id == idSolicitado)

    if(found == undefined){
        res.status(404).send({message: 'Estabelecimento não encontrado'})
    }

    res.status(200).send(found)
}

// post

const createRegistration = (req, res) => {
    let body = req.body
   
    let newRegistration = {

        id:(models.length) +1,
        like: body.like,
        nome: body.nome,
        categoria: body.categoria,
        endereço: body.endereço,
        numero: body.numero,
        bairro: body.bairro,
        cidade: body.cidade,
        telefone: body.telefone,
        pagamento: [
            "Dinheiro",
            "cartao",
            "pix"
        ],
        delivery: true 
        

    }

    models.push(newRegistration)

        res.status(201).json(
            [
                {
                    "mensagem": "Novo estabelecimento cadastrado com sucesso",
                    newRegistration
            }
]
)
}

module.exports = {
    getAll,
    getId,
    createRegistration,
}