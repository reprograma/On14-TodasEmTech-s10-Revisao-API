const models = require ("../models/estabelecimentos.json")

const getAll = (req, res) => {

    const {pagamento, bairro, delivery} = req.query  // transformar todos os itens abaixo do json em const
   
    let filtrados = models  //usar let, pq dependendo do filtro ela vai mudar
    
    //filtro por pagamento
    if (pagamento){
        filtrados = filtrados.filter(estabelecimento => {
            return estabelecimento.pagamento.includes(pagamento) //includes retorna perquisa como true or false
        })
        
    }
    



    //filtro por bairro
    if(bairro){
        filtrados = filtrados.filter(estabelecimento => {
            return estabelecimento.bairro == bairro
        })

      
    }

   


    //filtro por delivery
    if(delivery){
    filtrados = filtrados.filter(estabelecimento => {
        return estabelecimento.delivery == (delivery == "true" ? true : false)
    })
    
    }

    res.status(200).send(filtrados)
}   


//get
const getId = (req, res) => {

    const idSolicitado = req.params.id    // const {id} = req.params outra forma de fazer por ID subtituindo a linha acima
    const found = models.find(estabelecimento => estabelecimento.id == idSolicitado )
    
    if(found == undefined){
        res.status(404).send({message: `Estabelecimento não encontado` })
    }
    
    res.status(200).send(found)
}  

//Criação de cadastro - Criação POST - Função cria    

const cadastrar = (req, res) => {
    const body = req.body
    let novoEstabelecimento = {
        id:(models.length)+1,  // usuário não preenche o ID.
        likes: body.likes,
        nome: body.nome,
        categoria: body.categoria,
        endereco: body.endereco,
        numero: body.numero,
        bairro: body.bairro,
        cidade: body.cidade,
        telefone: body.telefone,
        pagamento: body.pagamento,
        delivery: body.delivery,

    }

    //refinamento dos campos e não faz o pst

    if(!body.nome || !body.pagamento || !body.cidade){ //a exclamação quer dizer NOT, entao diz ai se nao vier o nome no body para return o erro.
        return res.status(400).send({message: "Preencher todos os campos!"})
    }

    if(body.nome.length > 10 ){ //a exclamação quer dizer NOT, entao diz ai se nao vier o nome no body para return o erro.
    return res.status(400).send({message: "Você ultrapassou o limite de 10 caracteres!"}) 
    }

    models.push(novoEstabelecimento) //Empurra informações do model para o json
    
    res.status(201).send(novoEstabelecimento)


   
}


//Criação do like   Pacth - Função de alterar
const like =(req, res) => {

    const {id} = req.params //é igual a:  const id = req.params.id

    const found = models.find(estabelecimento => estabelecimento.id == id)

if (found == undefined){

    res.status(404).send({message:`Estabelecimento não encontrado`})
}

found.likes += 1

res.status(200).send(found)

}



//Criação do deslike   Pacth - Função de alterar

const deslike =(req, res) => {

    const id = req.params.id //é igual a:  const id = req.params.id

    const found = models.find(estabelecimento => estabelecimento.id ==id)

if (found == undefined){

    res.status(404).send({message:`Estabelecimento não encontrado`})
}

found.likes -=1

res.status(200).send(found)


}


// Na rota achamos como Delete 

const removeEstabelecimento = (req, res) => {

const idRequest = req.params.id

const found = models.find(estabelecimento => estabelecimento.id == idRequest)

if(found == undefined) {

    res.status(404).send({message: `Estabelecimento não encontrado`})

}

const index = models.indexOf(found)
models.splice(index, 1)

res.status(200).send([{message:"Estabelecimento removido com sucesso.", found}])

}
    


//  Atualização -- PUT -  pode ser usado para substituir e atualizar -- altera uma informação e mantém as outras
//PUT pode ser usado como PACTH

const atualizacao =(req, res) => {

    const id = req.params.id   //é igual a:  const id = req.params.id

    const found = models.find(estabelecimento => estabelecimento.id == id)


    if(found == undefined) {

        res.status(404).send({message: `Estabelecimento não encontrado`})
    
    }
    const {nome, categoria, endereco, numero, bairro, cidade, telefone, pagamento, delivery} =  req.body

    found.nome = nome || found.nome
    found.categoria = categoria || found.categoria
    found.endereco = endereco || found.endereco
    found.numero = numero || found.numero
    found.bairro = bairro || found.bairro
    found.cidade = cidade || found.cidade
    found.telefone = telefone || found.telefone
    found.pagamento = pagamento || found.pagamento
    found.delivery = delivery || found.delivery

res.status(200).send(found)


}



module.exports = {
    getAll,
    getId,
    cadastrar,// Post
    like, // pacth
    deslike, // pacth
    removeEstabelecimento, //Delete
    atualizacao // PUT
    
}

