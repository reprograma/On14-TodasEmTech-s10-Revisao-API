const cyberData = require("../models/cyber.json")


const getInit = (req, res) =>{
    res.send("Sejam bem vindas a minha API")
}

const getAll = (req, res)=>{
    const { Pagamento, Bairro, Categoria} = req.query
    let filtrados = cyberData
    
    if(Pagamento){
        filtrados = filtrados.filter(estabelecimento =>  {
            return estabelecimento.Pagamento.includes(Pagamento)
        })
        res.status(200).send(filtrados)
    }
    if(Bairro){
        filtrados = filtrados.filter(estabelecimento =>  {
            return estabelecimento.Bairro.includes(Bairro)
        })
        res.status(200).send(filtrados)
    }
    if(Categoria){
        filtrados = filtrados.filter(estabelecimento =>  {
            return estabelecimento.Categoria.includes(Categoria)
        })
        res.status(200).send(filtrados)
    }
    res.status(200).json(cyberData)
}

const getId = (req, res)=>{
    let idRequest = req.params.id 
    let cyberEncontrado = cyberData.find(local => local.id == idRequest)
    if(cyberEncontrado == undefined){
        res.status(404).send({message:"Cyber não encontrado"})
    }
    res.status(200).send(cyberEncontrado)
}

// const getQuery = (req,res)=>{
//     const { Pagamento, bairro, categoria} = req.query
//     let filtrados = cyberData
    
//     if(Pagamento){
//         filtrados = filtrados.filter(estabelecimento =>{
//             return estabelecimento.Pagamento.includes(Pagamento)

//         })
//         res.status(200).send(filtrados)
//     }
   
// }

module.exports = {
    getAll, getInit, getId
}