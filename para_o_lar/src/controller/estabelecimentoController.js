const models = require("../models/estabelecimentos.json");

const getAll = ( req, res) => {

    const {pagamento , bairro , delivery } = req.query

    let filtrados = models 
    // filtro por pagamento

    if(pagamento){
        filtrados = filtrados.filter(estabelecimento => {
            return estabelecimento.pagamento.includes(pagamento)
        }

        )
}

    // filtro por bairro

    if (bairro) {
        filtrados = filtrados.filter(estabelecimento =>{
            return estabelecimento.bairro == bairro
        })
    }

    // filtro por delivery

    if(delivery){
        filtrados = filtrados.filter(estabelecimento =>{
            return estabelecimento.delivery == (delivery == "true" ? true : false)
        }

        )
    }
    res.status(200).send(filtrados)

}

const getId = (req, res) =>{

    const IdSolicitado = req.params.id
    const { id } = req.params

    const found = models.find(estabelecimento => estabelecimento.id == IdSolicitado)
    if(found == undefined){
        res.status(404).send({message: "estabelecimento nao encontrado"})
    }
    
    res.status(200).send(found)

}
    const cadastrar = (req, res) =>{
         let body = req.body
        
         const novoEstabelecimento = {
             id: (models.length)+1,
             likes:body.likes,
             nome:body.nome,
             categoria:body.categoria,
             endereco:body.endereco,
             numero:body.numero,
             Bairro:body.Bairro,
             cidade:body.cidade,
             telefone:body.telefone,
             pagamento:body.pagamento,
             delivery:body.delivery,
         }

           if(!body.nome || !body.pagamento || !body.cidade){
               return res.status(400).send({message: "o campo nome é obrigatorio"})
           }
           if(body.nome.length > 10){
               return res.status(400).send({message: "voce ultrapassou o limite de 10 caracteres"})
           }

          models.push(novoEstabelecimento)

          res.status(201).send(novoEstabelecimento)
    }

        const like = (req, res) => {
            const {id} = req.params

            const found = models.find(estabelecimento => estabelecimento.id == id)

            if(found == undefined){
                res.status(404).send({message: "estabelecimento nao encontrado"})
            }
            
            found.likes += 1
            res.status(200).send(found)
     
    }

    

        const deslike = (req, res) => {
            const id = req.params.id

            const found = models.find(estabelecimento => estabelecimento.id == id)

            if(found == undefined){
                res.status(404).send({message: "estabelecimento nao encontrado"})
            }
            
            found.likes -= 1
            res.status(200).send(found)
     
    }

        const removerEstabelecimento  = (req, res) => {
            const idrequest = req.params.id 
            const found = models.find(estabelecimento => estabelecimento.id == idrequest)

            if(found == undefined){
                res.status(404).send({message: "estabelecimento nao encontrado"})

            }
            const index = models.indexOf(found)
             models.splice(index ,1)
             res.status(200).send({message: "estabelecimento removido com sucesso"})
        }

        const atualizacao = (req, res) => {
            const id = req.params.id 
            const found = models.find(estabelecimento => estabelecimento.id == id)

        

            if(found == undefined){
                res.status(404).send({message: "Estabelecimento nao encontrado"})

            }
            

         const { nome, categoria, endereco, numero, bairro, cidade, telefone, pagamento, delivery} = req.body
           

          found.nome = nome || found.nome
          found.categoria = categoria || found.categoria
          found.endereco = endereco || found.endereco
          found.numero = numero || found.numero
          found.bairro = bairro || found.bairro
          found.cidade = cidade || found.cidade
          found.telefone = telefone || found.telefone
          found.pagamento = pagamento || found.pagamento
          found.delivery = delivery || found.delivery

          
          console.log(found)
          res.status(200).send(found)

        }



    module.exports = {

    getAll ,
    getId,
    cadastrar,
    like,
    deslike,
    removerEstabelecimento,
    atualizacao
    
    
}


  

  






