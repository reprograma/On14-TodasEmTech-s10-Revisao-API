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
        pagamento: body.pagamento, // ainda que tenha formas de pgto fazer assim para não dizer ao usuário o que ele vai colocar
        delivery: body.delivery,
    }
//validações
        if(!body.nome || !body.pagamento || !body.cidade){ //continuar
            return res.status(400).send({mensagem: "Algum campo obrigatório não foi preenchido"})
        }

        if(body.nome.length > 10){
            return res.status(400).send({mensagem: "você ultrapassou o limite de 10 caracteres"})
        }

    //models.push(newRegistration)


    //res.status(201).send(newRegistration)
           


//validações novas

        if(!body.categoria || !body.endereço || !body.telefone){ //continuar
        return res.status(400).send({mensagem: "Algum campo obrigatório não foi preenchido"})
}

        if(body.nome.length > 10){
        return res.status(400).send({mensagem: "você ultrapassou o limite de 10 caracteres"})
}

    models.push(newRegistration)


    res.status(201).send(newRegistration)

}

    const like = (req, res) =>{
    const id = req.params.id // igual get id mesma logica

    const found = models.find(estabelecimento => estabelecimento.id == id)

    if(found == undefined){
        res.status(404).send({message: 'Estabelecimento não encontrado'})
    }
    found.likes += 1

    res.status(200).send(found)

    }

    const deslike = (req, res) =>{
        const id = req.params.id // igual get id mesma logica
    
        const found = models.find(estabelecimento => estabelecimento.id == id)
    
        if(found == undefined){
            res.status(404).send({message: 'Estabelecimento não encontrado'})
        }
        found.likes -= 1
    
        res.status(200).send(found)
    
        }

        //updateLike colocar la embaixo tb
        const updateLikes = (request, response) => {
            const idRequest = request.params.id
            let likeRequest = request.body.likes
        
            estabelecimentoEncontrado = models.find(local => local.id == idRequest)
        
            let like = estabelecimentoEncontrado.likes + likeRequest
        
            estabelecimentoEncontrado.likes = like
            write ()
        
            response.status(200).json(
                [{
                    "message": "Você gostou disso",
                    models
                }]
        
            )
        }

        // chamar deslike lá embaixo
        const likeDislike= (req, res) => {
            const {id} = req.params
            estabelecimento = models.find(e => e.id == id)
        
            likeRequest = req.query.likes
            dislikeRequest = req.query.dislike
            if( likeRequest == "true") estabelecimento.likes++
            if(dislikeRequest == "true") estabelecimento.dislikes++
        
            res.status(200).send(estabelecimento)
        }
        

        const removeEstabelecimento = (req, res) =>{
        const id = req.params.id 
    
        const found = models.find(estabelecimento => estabelecimento.id == id)
    
        if(found == undefined){
            res.status(404).send({message: 'Estabelecimento não encontrado'})
        }

        const index = models.indexOf(found)

        models.splice(index, 1)
        
        res.sendStatus(200).send({message: 'Estabelecimento deletado'})
           
        }

     // é igual const { id } = req.params
 const atualizacao = (req, res) =>{
     const idRequest = req.params.id
     const bodyRequest = req.body

    const found = models.find(estabelecimento => estabelecimento.id == idRequest)

   if(found == undefined){
            res.status(404).send({message: 'Estabelecimento não encontrado'})
        }

    bodyRequest.id = idRequest

    Object.keys(found).forEach((batatinha)=>{
        if(bodyRequest[batatinha] == undefined){
            found[batatinha] = found[batatinha]
        } else {
            found[batatinha] = bodyRequest[batatinha]
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
    found.delivery = delivery || found.delivery
  */  
    res.status(200).send(found)

}


module.exports = {
    getAll,
    getId,
    createRegistration,
    like,
    deslike, 
    removeEstabelecimento,
    atualizacao
}