const models = require("../models/estabelecimentos.json")

const getAll = (req, res) => {
    const { pagamento, bairro, delivery, id } = req.query
    let filtrados = models

    if (id) {
        filtrados = filtrados.filter(estabeleciamento => {
            return estabeleciamento.id == id
        })
    }

    if (pagamento) {
        // console.log();
        filtrados = filtrados.filter(estabeleciamento => {
            return estabeleciamento.pagamento.includes(pagamento)
        })
    }

    if (bairro) {
        filtrados = filtrados.filter(estabeleciamento => {
            return estabeleciamento.bairro == bairro
        })
    }

    if (delivery) {
        filtrados = filtrados.filter(estabeleciamento => {
            return estabeleciamento.delivery == (delivery == "true" ? true : false)
        })
    }


    res.status(200).send(filtrados)
}

const getId = (req, res) => {
    const IdSolicitado = req.params.id
    const found = models.find(estabeleciamento => estabeleciamento.id == IdSolicitado)

    if (found == undefined) {
        res.status(404).send({ message: "Estabelecimento não encontrado" })
    }
    res.status(200).send(found)
}

const createEstabelecimento = (req, res) => {
    let body = req.body

    let novoEstabelecimento = {
        id: (models.length) + 1,
        like: body.likes,
        nome: body.nome,
        categoria: body.categoria,
        endereco: body.endereco,
        numero: body.numero,
        bairro: body.bairro,
        telefone: body.telefone,
        pagamento: body.pagamento,
        delivery: body.delivery
    }
    models.push(novoEstabelecimento)
    res.status(201).send({ message: "Estabelicimento criado com sucesso." })
}

const likeEDeslike = (req, res) => {
    const { id } = req.params
    let { like, deslike } = req.query
    const found = models.find(estabeleciamento => estabeleciamento.id == id)
    if (found == undefined) {
        res.status(404).send({ message: "Estabelecimento não encontrado." })
    }
    like == 1 ? found.likes += 1 : ''
    deslike == 1 ? found.likes -= 1 : ''
    like && deslike == 1 ? res.status(400).send({ message: "Não é possivel marcar like e deslike simultaneamente. Escolhar a opção deseja e tente novamente." }) : ''
    res.status(200).send(found)
}

module.exports = {
    getAll,
    getId,
    createEstabelecimento,
    likeEDeslike
}