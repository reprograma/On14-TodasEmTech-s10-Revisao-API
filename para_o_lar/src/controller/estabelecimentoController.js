const models = require ('../models/estabelecimentos.json');
//const pagamento = req.query.params
//forma mais simples



 const getAll = (req, res)=> {

    const{pagamento, categoria, delivery} = req.query

    let filtrados = models

//filtrando um estabelecimento por pagamento

    if (pagamento) {
        filtrados = filtrados.filter(estabelecimento =>{
            return estabelecimento.pagamento.includes (pagamento)
        });
    }

//MÉTODO INCLUDES: O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false. 

  
//filtrando um estabelecimento por categoria

    if (categoria) {
        filtrados = filtrados.filter (estabelecimento =>{
            return estabelecimento.categoria == categoria
        })
    }


//filtrando um estabelecimento por delivery

    if (delivery) {
        filtrados = filtrados.filter  (estabelecimento => {
            return estabelecimento.delivery == (delivery == "true" ? true: false)
        })
    }


    res.status(200).send(filtrados);

}

//filtrando um estabelecimento por ID

 const getId =(req, res)=> {
    const idRequest = req.params.id


    const idEncontrado = models.find(estabelecimento => estabelecimento.id == idRequest);


if (idEncontrado == undefined)
res.status(404).json({
    mensagem:"Estabelecimento não encontrado"
})
res.status(200).send (idEncontrado);
};



// Cadatrando um novo estabeleciemento com POST

const cadastrar = (req, res) => {
 let body = req.body
 const novoEstabelcimento = {
    id:(models.length)+1,
    likes:body.likes,
    nome:body.nome,
    categoria:body.categoria,
    endereço:body.endereço,
    numero:body.numero,
    bairro:body.bairro,
    cidade:body.cidade,
    telefone:body.telefone,
    pagamento:body.pagamento,
    delivery:body.delivery,
 } 

models.push(novoEstabelcimento)
res.status(201).send(novoEstabelcimento)
}


// Atualização de like

const like = (req, res) => {
    const{id} = req.params

    const idEncontrado = models.find(estabelecimento => estabelecimento.id == id)
    

    if (idEncontrado == undefined)
res.status(404).json({
    mensagem:"Estabelecimento não encontrado"
})

idEncontrado.likes += 1

res.status(200).send (idEncontrado)
}



// Atualização de deslike

const deslike = (req, res) => {
    const{id} = req.params

    const idEncontrado = models.find(estabelecimento => estabelecimento.id == id)
    

    if (idEncontrado == undefined)
res.status(404).json({
    mensagem:"Estabelecimento não encontrado"
})

idEncontrado.deslike -= 1

res.status(200).send (idEncontrado)
}

 module.exports = {
    getAll,
    getId,
    cadastrar,
    like,
    deslike
    
}
