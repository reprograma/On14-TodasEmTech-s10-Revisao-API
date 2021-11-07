
const models = require("../models/estabelecimentosModels.json");


const getAll = (request, response)=>{
    
      const {pagamento, bairro, delivery } = request.query
      let filtrados = models
      
 
     if(pagamento) {
         filtrados = filtrados.filter(estabelecimento=> {
             return estabelecimento.pagamento.includes(pagamento)
         })
     }
     if (bairro) {
        filtrados = filtrados.filter(estabelecimento =>{
            return estabelecimento.bairro == bairro
        })
    }
 if(delivery) {
     filtrados = filtrados.filter(estabelecimento => {
         return estabelecimento.delivery ==(delivery == 'true' ? true : false )
     })
 }
            
     response.status(200).send(filtrados);
}

  const getId = (request,response)=>{
    const idSolicitado= request.params.id
    const found = models.find(estabelecimento => estabelecimento.id == idSolicitado)
    
    if(found == undefined){
        response.status(404).send({message: 'Estabelecimento não encontrado'})
    }

   response.status(200).send(found)

  }
   
   const cadastrar = (request,response) =>{
     let body = request.body
    console.log(body);
     let cadastrarEstabelecimento = {
        "id" : (models.length)+1,
        "likes": body.likes,
        "deslikes" : body.deslikes,
        "nome" : body.nome,
        "categoria":body.categoria,
        "endereco":body.endereco  ,
        "bairro":body.bairro  ,
        "cidade":body.cidade,
        "telefone" :body.telefone,
        "pagamento" :body.pagamento,
        "delivery" :body.delivery
     }

     if(!body.nome){
         return response.status(400).send({message: "O campo nome é obrigatorio"})
     }

     models.push(cadastrarEstabelecimento)
     response.status(201).send(
        [
            {
                "mensagem " : "estabelecimento cadastrado com sucesso",
                cadastrarEstabelecimento
            }
        ]
    )
   }
   
const like = (request,response)=>{ 
    const {id}= request.params //const id =request.params.id
    const found = models.find(estabelecimento => estabelecimento.id == id)
 
    if(found == undefined){
        response.status(404).send({message: 'Estabelecimento não encontrado'})
    }

    found.likes += 1

    response.status(200).send(found)

}
const deslike = (request,response)=>{ 
    const {id}= request.params 
    const found = models.find(estabelecimento => estabelecimento.id == id)
 
    if(found == undefined){
        response.status(404).send({message: 'Estabelecimento não encontrado'})
    }

    found.deslikes -= 1

    response.status(200).send(found)

}
const removeEstabelecimento = (request,response)=>{ 
    const {id}= request.params //const id =request.params.id
    const found = models.find(estabelecimento => estabelecimento.id == id)
 
    if(found == undefined){
        response.status(404).send({message: 'Estabelecimento não encontrado'})
    }
    const index = models.indexOf(found)
    models.splice(index, 1)
    //response.sendStatus(204)
    response.status(200).send({message: 'Estabelecimento deletado'})

}
const atualizacao = (request,response)=>{ 
   const idRequest = request.params.id
   const bodyRequest = request.body
   const found = models.find(estabelecimento => estabelecimento.id == idRequest)
    bodyRequest.id = idRequest

    Object.keys(found).forEach((informacao)=>{
        if(bodyRequest[informacao] == undefined){
            found[informacao] = found[informacao]
        } else {
            found[informacao] = bodyRequest[informacao]
        }
    })


    if(found == undefined){
        response.status(404).send({message: 'Estabelecimento não encontrado'})
    }


  // const { nome, categoria, endereco, bairro, cidade, telefone, pagamento, delivery } = request.body
   //found.nome = nome || found.nome
  // found.categoria = categoria || found.categoria
  // found.endereco = endereco || found.endereco
  // found.bairro = bairro || found.bairro
  // found.cidade = cidade || found.cidade
  // found.telefone = telefone || found.telefone
  // found.pagamento = pagamento || found.pagamento
  // found.delivery = delivery || found.delivery
 
   response.status(200).send(found)
}

module.exports= {
    getId,
    getAll,
    cadastrar,
    like,
    deslike,
    removeEstabelecimento,
    atualizacao
}
