
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
        res.status(404).send({mensagem:"Estabelecimento não escontrado"})
    }
    response.status(200).send(found)

}
   
   const cadastrar = (request,response) =>{
     let body = request.body
    console.log(body);
     let cadastrarEstabelecimento = {
        "id" : (models.length)+1,
        "nome" : body.nome,
        "categoria":body.categoria,
        "endereco":body.endereco  ,
        "bairro":body.bairro  ,
        "cidade":body.cidade,
        "telefone" :body.telefone,
        "pagamento" :body.pagamento,
        "delivery" :body.delivery
     }

     console.log(cadastrarEstabelecimento);
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
   

module.exports= {
    getId,
    getAll,
    cadastrar
}
