const app = require("../app")
const models = require("../models/estabelecimentos.json")

const getAll = (request, response) => {

    //const pagamento = request.query
    const {pagamento, bairro, delivery} = request.query //para filtrar por categorias do json

    let filtrados = models

    //filtro por pagamento
    if (pagamento){
        filtrados = filtrados.filter(estabelecimento=> {
            return estabelecimento.pagamento.includes(pagamento) //includes só serve pra array
        })
    }

    //filtro por bairro
    if (bairro) {
        filtrados = filtrados.filter(estabelecimento =>{
            return estabelecimento.bairro == bairro
        })
    }

    //filtro por delivery
    if (delivery) {
        filtrados = filtrados.filter(estabelecimento=> {
            return estabelecimento.delivery == (delivery == 'true' ? true : false)
        })
        //arr.filter( function(x) { return Boolean(x); });
        //banners.filter(function (b) { return b.BannerAtivo } )
    }

    response.status(200).send(filtrados)

}

//FAZER UM POST DE CADASTRO DE ESTABELECIMENTO OU LIKE E DESLIKE

const createEstabelecimento = (request, response)=>{ //criar um novo estabelecimento
    const bodyRequest = request.body //pega info do body
    
    let novoEstabelecimento = { //cria novo objeto 1:55m analu
        id: (models.length)+1,
        likes: bodyRequest.likes,
        deslikes: bodyRequest.deslike,
        nome: bodyRequest.nome,
        categoria: bodyRequest.categoria,
        endereço: bodyRequest.endereço,
        numero: bodyRequest.numero,
        bairro: bodyRequest.bairro,
        cidade: bodyRequest.cidade,
        telefone: bodyRequest.telefone,
        pagamento: bodyRequest.pagamento,
        delivery: bodyRequest.delivery
    }
//tentar fazer o try catch para erro no lugar de if else
    if(!bodyRequest.nome){
        return response.status(400).json({error: 'Nome não pode estar em branco.'})
    }

//comprimento do nome
    if(bodyRequest.nome.length > 20){
        return response.status(400).json({error: 'Limite de caracteres excedido. MÁx:20.'})
    }

    models.push(novoEstabelecimento) //empurra as infos do body para o json

    response.status(201).json( //status 201 é created
        [
            {
                "mensagem": "Estabelecimento cadastrado com sucesso",
                novoEstabelecimento 
            }
        ]
    )  
}

const like = (request, response)=>{
    const {id} = request.params //igual a const id = req.params.id e entre chaves pq o id era um objeto

    const found = models.find(estabelecimento => estabelecimento.id == id)

    if(found == undefined){
        response.status(404).send({message: "Estabelecimento não encontrado."})
    }

    found.likes += 1 //o likeS é referente como o itm está no Json

    response.status(200).send(found)
}

//DESLIKE
const deslike = (request, response)=>{
    const {id} = request.params //igual a const id = req.params.id e entre chaves pq o id era um objeto

    const found = models.find(estabelecimento => estabelecimento.id == id)

    if(found == undefined){
        response.status(404).send({message: "Estabelecimento não encontrado."})
    }

    found.deslikes += 1 //o deslikeS é referente como o itm está no Json

    response.status(200).send(found)
}

const removeEstabelecimento = (request, response)=>{
    const {id} = request.params //igual a const id = req.params.id e entre chaves pq o id era um objeto

    const found = models.find(estabelecimento => estabelecimento.id == id)

    if(found == undefined){
        response.status(404).send({message: "Estabelecimento não encontrado."})
    }

    const index = models.indexOf(found)

    models.splice(index, 1) //tira o item de dentro do array

    response.status(200).send({mensage: 'Estabelecimento deletado.'}) //pode substituir status por res.sendStatus(204)
}
//PUT atualiza somente o item solicitado,mantem os demais
const atualizacao = (request, response)=>{
    const idRequest = request.params.id //igual a const id = req.params.id e entre chaves pq o id era um objeto
    const bodyRequest = request.body

    const atualizacaoEncontada = models.find(estabelecimento => estabelecimento.id == idRequest)

    if(atualizacaoEncontada == undefined){
        response.status(404).send({message: 'Estabalecimento não Encontrado.'})
    }

    bodyRequest.id = idRequest

    Object.keys(atualizacaoEncontada).forEach((chave)=>{
        if(bodyRequest[chave] == undefined){
            atualizacaoEncontada[chave] = atualizacaoEncontada[chave]
        } else {
            atualizacaoEncontada[chave] = bodyRequest[chave]
        }
    })

    // const found = models.find(estabelecimento => estabelecimento.id == id)

    // if(found == undefined){
    //     response.status(404).send({message: "Estabelecimento não encontrado."})
    // }

    // const { nome, categoria, endereço, numero, bairro, cidade, telefone, pagamento, delivery } = request.body

    // found.nome = nome || found.nome
    // found.categoria = categoria || found.categoria
    // found.endereço = endereço || found.endereço
    // found.numero = numero || found.numero
    // found.bairro = bairro || found.bairro
    // found.cidade = cidade || found.cidade
    // found.telefone = telefone || found.telefone
    // found.pagamento = pagamento || found.pagamento
    // found.delivery = delivery || found.delivery   

    response.status(200).send(atualizacaoEncontada)
}

//pra gravar no json
// const fs = require("fs")
// const write = (request, response) =>{fs.writeFile("./src/models/estabelecimentos.json", JSON.stringify(models),'utf8', function (err){
//     if(err){
//         return response.status(500).send({message: err});
//     }
// })}

const getId = (request, response) => {
    const idSolicitado = request.params.id

    const found = models.find(estabelecimento => estabelecimento.id == idSolicitado)

    if(found == undefined){
        response.status(404).send({message: "Estabelecimento não encontrado."})
    }

    response.status(200).send(found)
}

module.exports = {
    getAll,
    getId,
    createEstabelecimento,
    like,
    deslike,
    removeEstabelecimento,
    atualizacao
}