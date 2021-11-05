const models = require ('../models/estabelecimentos.json');


//1° - retornando tds os estab com filtros(get):
const getAll = (req, res) => {
    
    const getAll = (req, res) =>
    {
        const {pagamento, bairro, delivery} = req.query
        let filtrados = models 
//filtrando por pagamento
        if (pagamento)
        {
            filtrados = filtrados.filter(estabelecimento =>
                {
                    return estabelecimento.pagamento.includes(pagamento) //retornando se true ou false
                })
        }
    }
//filtrando por bairro
        if(bairro)
        {
            filtrados = filtrados.filter(estabelecimento =>{return estabelecimento.bairro == bairro})
        }

// filtro por delivery
        if(delivery)
        {
            filtrados = filtrados.filter(estabelecimento =>{return estabelecimento.delivery == (delivery == "true" ? true : false)})

            res.status(200).send(filtrados)
        }

}

//2° retornando por estab - Id (get):
const getId = (req, res) => {
    const idSolicitado = req.params.id
    // const {id} = req.params outra forma de fazer por ID subtituindo a linha acima
    
    const found = models.find(estabelecimento => estabelecimento.id == idSolicitado)
    
    if(found == undefined){
        res.status(404).send({message: 'Estabelecimento não encontado'})
    }
    
    res.status(200).send(found)
}

//3° criando um novo estab (POST):

const cadastrar = (req, res)=>{
    let body = req.body
    console.log(body);
    let novoEstabelecimento ={
    "id": (models.length)+1,
    "likes": body.likes,
    "nome": body.nome,
    "categoria": body.categoria,
    "endereco": body.endereco,
    "numero": body.numero,
    "bairro": body.bairro,
    "cidade": body.cidade,
    "telefone": body.telefone,
    "pagamento": body.pagamento,
    "delivery": body.delivery
    }
    
    //refinamento dos campos

    if(!body.nome || !body.pagamento || !body.cidade)
    {
        return res.status(400).send({mensagem: "Preencher Todos os Campos"})
    }

    if(body.nome.length > 10){return res.status(400).send({mensagem: "Foi ultrapassado o limite de 10 caracteres"})}

    models.push(novoEstabelecimento)
    res.status(201).send(novoEstabelecimento)
}

//opção de Like usando a função de alterar (PACHT)
const like =(req, res)=>
{
    const {id} = req.params
    const found = models.find(estabelecimento => estabelecimento.id == id)

    if (found == undefined)
    {
        res.status(404).send({mensagem: `Estabelecimento não encontrado`})
    }
    found.likes +=1
    res.status(200).send(found)

} 

//criando opção de Deslike (PACHT)
const deslike = (req, res) =>
{
    const id = req.params.id
    const found = models.find(estabelecimento => estabelecimento.id == id)

    if (found == undefined){res.status(404).send({mensagem: `Estabelecimento não encontrado`})}
    
    found.likes -=1
    res.status(200).send(found)
}

//fazendo a opção de deletar(DELITE)
const removerEstabelecimento = (req, res)=>
{
    const idRequest = req.params.id
    const found = models.find(estabelecimento => estabelecimento.id ==idRequest)

    if(found == undefined){res.status(404).send({mensagem: `Estabelecimento Não Encontrado`})}

    const index = models.indexOf(found)
    models.splice(index, 1)

    res.status(200).send([{mensagem: "Estabelecimento Removido Com Sucesso!", found}])
}


//Atualização com o verbo (PUT)
const atualização = (req, res)=>
{
    const id = req.params.id
    const found = models.find(estabelecimento => estabelecimento.id == id)

    if(found == undefined){res.status(404).send({mensagem: `Estabelecimento não encontrado`})}

    const {nome, categoria, endereco, numero, bairro, cidade, telefone, pagamento, delivery} = req.body

    found.nome = nome || found.nome
    found.categoria = categoria || found.categoria
    found.endereço = endereco || found.endereço
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
    cadastrar,
    like,
    deslike,
    removerEstabelecimento,
    atualização
}
