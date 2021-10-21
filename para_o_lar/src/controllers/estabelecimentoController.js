//return é para jogar para fora da função
const models = require ("../models/estabelecimentos.json")

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
// LIKE E DESLIKE = Ver a logica, pegar por Id (igual get all) e fazer a logica de acrescentar e diminuir, colocar erro 404 se o usuario colocar um id que nao existe

const like = (req, res) => {
    const idRequest = req.params.id
    
}



module.exports = {
    getAll,
    getId
}