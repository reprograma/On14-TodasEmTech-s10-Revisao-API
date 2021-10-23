//return é para jogar para fora da função
const models = require ("../models/estabelecimentos.json")
const fs = require("fs");

const write = (request, response) =>{fs.writeFile("./src/models/estabelecimentos.json", JSON.stringify(models),'utf8', function (err){
    if(err){
        return response.status(500).send({message: err});
    }
})}

//GET varios filtros
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

//GET por ID
const getId = (req, res) => {
    const idSolicitado = req.params.idSolicitado
    // const {id} = req.params outra forma de fazer por ID subtituindo a linha acima
    
    const localFound = models.find(estabelecimento => estabelecimento.id == idSolicitado )
    
    if(localFound == undefined){
        res.status(404).send({message: "Estabelecimento não encontado" })
    }
    
    res.status(200).send(localFound)
}



// FAZER UM POST = nome deverá ser cadastro de estabelecimento
//POST
const createLocal = (request, response) => {
    const body = request.body

    let newLocal = {
        id: (models.length) +1,
        likes: body.likes,
        nome: body.nome,
        categoria: body.categoria,
        numero: body.numero,
        bairro: body.bairro,
        cidade: body.cidade,
        telefone: body.telefone,
        pagamento: body.pagamento,
        delivery: body.delivery
    }

    if(!body.nome|| !body.pagamento || !body.cidade){ //a exclamação quer dizer NOT, entao diz ai se nao vier o nome no body para return o erro.
        return response.status(400).send({message: "Preencher todos os campos!"})
    }

    if(body.nome.length > 10 ){ //a exclamação quer dizer NOT, entao diz ai se nao vier o nome no body para return o erro.
    return response.status(400).send({message: "Você ultrapassou o limite de 10 caracteres!"}) 
    }

    models.push(newLocal)
    write ()
    response.status(201).json(
        [{
            "mensagem":"Estabelecimento cadastrado com sucesso!",
            newLocal
        }]
    )

}


// LIKE E DESLIKE = Ver a logica, pegar por Id (igual get all) e fazer a logica de acrescentar e diminuir, colocar erro 404 se o usuario colocar um id que nao existe
//PATCH -LETICIA
const updateLike = (request, response) => {
    const idRequest = request.params.id
    let likeRequest = request.body.likes

    localEncontrado = models.find(local => local.id == idRequest)

    let like = localEncontrado.likes + likeRequest

    localEncontrado.likes = like

    write()

    response.status(200).json(
        [{
            "message":"Você gostou disso",
            models
        }]
    )
}

//PATCH
const like = (request, response) => {
    const {id} = request.params // const id = request.params.id (outra forma de escrever)
    const localFound = models.find(local => local.id == id)

    if (localFound == undefined){
        response.status(404).send({message:'Estabelecimento não encontrado.'})
    }

    localFound.likes += 1 // esse 1 corresponde ao numero de curtidas que será somatizado quando o usuarios fizer o patch
    write()
    response.status(200).send(localFound)
}

//PATCH
const deslike = (request, response) => {
    const {id} = request.params // const id = request.params.id (outra forma de escrever)
    const localFound = models.find(local => local.id == id)

    if (localFound == undefined){
        response.status(404).send({message:'Estabelecimento não encontrado.'})
    }

    localFound.likes -= 1 // esse 1 corresponde ao numero de curtidas que será somatizado quando o usuarios fizer o patch
    write()
    response.status(200).send(localFound)
}

//DELETE
const removeEstabelecimento = (request, response) => {
    const idRequest = request.params.id
    const localFound = models.find(local => local.id == idRequest)

    if (localFound == undefined){
        response.status(404).send({message: "Estabelecimento não encontrado."})
    } 

    const index = models.indexOf(localFound)
    models.splice(index, 1)

    write()

    response.status(204).send([{message:"Estabelecimento removido com sucesso.", localFound}]) // para retornar a mensagem tem que por 200, pq 204 nao retorna mensagem
}

//EXEMPLO DE PUT 1
//PUT - outra forma de fazer sem que ele substitua todos os dados, quando for realizar uma atualização 
//IMPORTANTE, NAO FUNCIONA PARA BOLEANO
const update = (request, response) => {

    const idRequest = request.params.id
    //arquivo filtrado
    const localFound = models.find(local => local.id == idRequest)
    
    if (localFound == undefined){
        response.status(404).send({message:'Estabelecimento não encontrado.'})
    }

    //armazenando as informaçoes recebidas numa constante para cada chave
    const{nome, categoria, endereço, numero, bairro, cidade, telefone, pagamento, delivery} = request.body

    //pegando o arquivo filtrado
    localFound.nome = nome || localFound.nome
    localFound.categoria = categoria || localFound.categoria
    localFound.endereço = endereço || localFound.endereço
    localFound.numero = numero || localFound.numero
    localFound.bairro = bairro || localFound.bairro
    localFound.cidade = cidade || localFound.cidade
    localFound.telefone = telefone || localFound.telefone
    localFound.pagamento = pagamento || localFound.pagamento
    localFound.delivery = delivery || localFound.delivery


    response.status(200).json(
        [{
            "message":"Dados atualizadas",
            localFound
        }]
    )
}


//EXEMPLO DE PUT 2
//PUT - outra forma de fazer sem que ele substitua todos os dados, quando for realizar uma atualização 
//IMPORTANTE: FUNCIONA PARA BOLEANO / PARA TODOS TIPOS ***



const updateWithBolean = (req, res) =>{
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
 
    res.status(200).send(found)
     
}






module.exports = {
    getAll,
    getId,
    updateLike,
    createLocal, 
    like,
    deslike,
    removeEstabelecimento,
    update,
    updateWithBolean
}