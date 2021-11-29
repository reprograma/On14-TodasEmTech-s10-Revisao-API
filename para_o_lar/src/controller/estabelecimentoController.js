const models = require('../models/estabelecimentos.json');

const getAll = (req, res) => {
    
    const { pagamento, bairro, delivery } = req.query

    let filtrados = models

    // filtro por pagamento

    if (pagamento) {
        filtrados = filtrados.filter(estabelecimento => {
            return estabelecimento.pagamento.includes(pagamento)
        })
    }

    // filtro por bairro
    
    if (bairro) {
        filtrados = filtrados.filter(estabelecimento =>{
            return estabelecimento.bairro == bairro
        })
    }

    // filtro por delivery
    if (delivery) {
        filtrados = filtrados.filter(estabelecimento => {
            return estabelecimento.delivery == (delivery == 'true' ? true : false)
        })
      
    }

    res.status(200).send(filtrados)
}



const getId = (req, res) => {
    const idSolicitado = req.params.id
 
    const found = models.find(estabelecimento => estabelecimento.id == idSolicitado)

    if(found == undefined){
        res.status(404).send({message: 'Estabelecimento não encontrado'})
    }

    res.status(200).send(found)


}

const cadastrar = (req, res) => {
    let body = req.body

    let novoEstabelecimento = {
        id: (models.length)+1,
        likes:body.likes,
        nome:body.nome,
        categoria:body.categoria,
        endereço:body.endereço,
        numero:body.endereço,
        bairro:body.bairro,
        cidade:body.cidade,
        telefone:body.telefone,
        pagamento:body.pagamento,
        delivery:body.delivery,
    }

    if (!body.nome || !body.pagamento || !body.cidade){
         return res.status(400).send({mensagem: "Algum campo obrigatorio nao foi preenchido"})
    }

    if(body.nome.length > 10){
        return res.status(400).send({mensagem: "voce ultrapassou o limite de 10 caracteres"})
    } 


    models.push(novoEstabelecimento)

    res.status(201).send(novoEstabelecimento)

}

const like = (req, res) =>{
    const id  = req.params.id // const id = req.params.id

    const found = models.find(estabelecimento => estabelecimento.id == id)

    if(found == undefined){
        res.status(404).send({message: 'Estabelecimento não encontrado'})
    }

    found.likes += 1

    res.status(200).send(found)
  
    
}

const deslike = (req, res) =>{
    const id  = req.params.id // const id = req.params.id

    const found = models.find(estabelecimento => estabelecimento.id == id)

    if(found == undefined){
        res.status(404).send({message: 'Estabelecimento não encontrado'})
    }

    found.likes -= 1

    res.status(200).send(found)
  
    
}

const removeEstabelecimento = (req, res) =>{
    const id  = req.params.id // const id = req.params.id

    const found = models.find(estabelecimento => estabelecimento.id == id)

    if(found == undefined){
        res.status(404).send({message: 'Estabelecimento não encontrado'})
    }

    const index = models.indexOf(found)

    models.splice(index, 1)

    res.status(200).send({message: 'Estabelecimento deletado'})
  
    
}

const atualizacao = (req, res) =>{
    const idRequest  = req.params.id 
    const bodyRequest = req.body

    const found = models.find(estabelecimento => estabelecimento.id == idRequest)
    
    if(found == undefined){
        res.status(404).send({message: 'Estabelecimento não encontrado'})
    }

    bodyRequest.id = idRequest

    Object.keys(found).forEach((informacao)=>{
        if(bodyRequest[informacao] == undefined){
            found[informacao] = found[informacao]
        } else {
            found[informacao] = bodyRequest[informacao]
        }
    })
 
    /*const { nome, categoria, endereço, numero, bairro, cidade, telefone, pagamento, delivery } = req.body

    found.nome = nome || found.nome
    found.categoria = categoria || found.categoria
    found.endereço = endereço || found.endereço
    found.numero = numero || found.numero
    found.bairro = bairro || found.bairro
    found.cidade = cidade || found.cidade
    found.telefone = telefone || found.telefone
    found.pagamento = pagamento || found.pagamento
    found.delivery = delivery || found.delivery*/


    

    res.status(200).send(found)
  
    
}




module.exports = {
    getAll,
    getId,
    cadastrar,
    like,
    deslike,
    removeEstabelecimento,
    atualizacao
}