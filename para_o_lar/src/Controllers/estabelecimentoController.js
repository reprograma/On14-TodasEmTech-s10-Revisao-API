const models = require('../models/estabelecimentos .json');

//todos CHAMAR O MODEL no caso foi criado uma const  com o nome filtrados chamando a models nahora que for chamar a função coloca no parametro o filtrado que vai trazer o que o cliente pediu  
const getAll = (req, res) =>{
  // assim voce  consegue colocar todos em uma const so lembrando que vc pode chamalo utilizando os if 
  const {pagamento,  delivery, categoria } = req.query

  let filtrados = models
  //filtro por pagamentos 
  if (pagamento ){
    filtrados = filtrados.filter(estabelecimentos => {
      return estabelecimentos.pagamento.includes(pagamento)
      //.includes dertemina se um 
    })
  }
 
  
  //filtro categoria 
  if(categoria){
    filtrados = filtrados.filter(estabelecimentos => {
      return estabelecimentos.categoria == categoria
    })
  }
  //filtro por delivery tem que ser um ternario  == (delivery == "true" ? true : false)
  if(delivery){
    filtrados = filtrados.filter(estabelecimentos => {
      return estabelecimentos.delivery == (delivery == "true" ? true : false)
    })
  }



  res.status(200).send(filtrados )
}

// por id 
const getId = (req, res) =>{
// criar uma  const para pegar o parametro 
// tambem pode ser chamado desta forma/ const {id}= req.params.id
  const idSolicitado = req.params.id
  const found = models.find(estabelecimeto => estabelecimeto.id == idSolicitado)
 
  if(found == undefined){
    res.status(404).send({ message:"Estabelecimeto não encontrado "})
  }
  res.status(200).send(found)


}

// fazer um post 
const createMovie = (req, res) =>{
  let body =req.body//solicitando um body para criação 
  
  //criando a nova solicitação route
  let novEstabelecimento ={
    id :(models.length)+1,  
    likes: body.likes ,
    nome : body.nome,
    categoria: body.lanchonet,
    endereço: body.endereço,
    numero:  body.numero,
    bairro :body.bairro,
    cidade: boby.cidade,
    telefone: body.telefone,
    pagamento: body.pagamento,
    delivery: body.delivery

  }
  if(!body.nome || ! body.pagamento || ! body.cidade){
    return res.status(400).enviar({message: "Algum campo obrigatorio não foi preenchido"})
  }
  if ( corpo . nome . comprimento  >  10 ) {
    return  res . status ( 400 ) . send ( { mensagem : "voce ultrapassou o limite de 10 caracteres" } )
  } 
  models.push(novEstabelecimento)
  res.status(201).json(
    [
      {
        "mensagem": "Estabelecimento cadastrado com sucesso",
        novEstabelecimento
      }
    ]
  )
}

// criar um likes
const like = (req, res) =>{
  const id = req.params.id

  const found = models.find(estabelecimentos => estabelecimento.id === id)

  if(found == undefined){
    res.status(404).send( { messagemensagem : 'Estabelecimento não encontrado'})
  }
  found.likes += 1 
  res.status(200).send(found)

}

// des like
const deslike = (req, res) =>{
  const id = req.params.id

  const found = models.find(estabelecimentos => estabelecimento.id === id)

  if(found == undefined){
    res.status(404).send({ message:"Estabelecimento não encontrado"})
  }

  found.likes -=1

  res.status(200).send(found)
}

// para remover 
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
 
//para atualiza
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
  res.status(200).send(found)

}
module.exports ={
  getAll,
  getId,
  createMovie,
  like,
  deslike,
  removeEstabelecimento,
  atualizacao
}