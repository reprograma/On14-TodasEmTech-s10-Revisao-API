const models = require ('../models/clinicas.json');
 const getAll = (req, res)=> {

    const{estado, cidade, bairro, especializado, catFriendly} = req.query

    let filtrados = models
//filtrando um clíncia por categoria
    if (bairro) {
        filtrados = filtrados.filter (clinica =>{
            return clinica.bairro == bairro
        })
    }
    //filtrando um clíncia por categoria
    if (estado) {
        filtrados = filtrados.filter (clinica =>{
            return clinica.estado == estado
        })
    }
//filtrando clínica por categoria
if (cidade) {
    filtrados = filtrados.filter (clinica =>{
        return clinica.cidade == cidade
    })
}
//filtrando clínica por especialidade
    if (especializado) {
        filtrados = filtrados.filter  (clinica => {
            return clinica.especializado == (especializado == "true" ? true: false)
        })
    }
    res.status(200).send(filtrados);


//filtrando clínica por esapço Cat Friendly
if (catFriendly) {
    filtrados = filtrados.filter  (clinica => {
        return clinica.catFriendly == (catFriendly == "true" ? true: false)
    })
}
res.status(200).send(filtrados);

}
//filtrando clínica por ID

 const getId =(req, res)=> {
    const idRequest = req.params.id
    const idEncontrado = models.find(clinica => clinica.id == idRequest);
if (idEncontrado == undefined)
res.status(404).json({
    mensagem:"Estabelecimento não encontrado"
})
res.status(200).send (idEncontrado);
};
// Cadatrando uma nova clínica com POST
const cadastrar = (req, res) => {
 let body = req.body
 const clinicaVet ={
    id:(models.length)+1,
    likes:body.likes,
    deslike:body.deslike,
    nome:body.nome,
    estado:body.estado,
    endereço:body.endereço,
    numero:body.numero,
    bairro:body.bairro,
    cidade:body.cidade,
    telefone:body.telefone,
    especializado:body.especializado,
    catFriendly:body.catFriendly
 }
if (!body.nome||!body.endereço||!body.numero||!body.bairro || !body.cidade ||!body.telefone) {
    return  res.status(400).send ({message: "Um dos campo obrigatório não foi preenchido"})
}
if(body.telefone.length < 10 ||body.telefone.length < 11) {
    return res.status(400).send ({message: "Insira um telefone válido"})
}
models.push(clinicaVet)
res.status(201).send(clinicaVet)
};
// Deleta uma  clínica com DELETE
const deletarClinica = (req, res) =>{
    const id = req.params.id
    const found =models.find(clinica=> clinica.id == id)
    if(found == undefined) {
        res.status(400).send ({message: "Clínica veterianária não encontrada"})
    }
const index = models.indexOf(found)
    models.splice(index, 1)
res.status(200).send ({message: "Clínica veterianária deletada"})
}
// Atualiza uma nova clínica com PUT
const atualizacao = (req, res)=> {
    const idRequest = req.params.id
    const bodyRequest = req.body
    const found = models.find(clinica => clinica.id == idRequest)
    if(found == undefined) {
        res.status(400).send ({message: "Clínica veterianária não encontrada"})
}
bodyRequest.id= idRequest
Object.keys(found).forEach((informacao) =>{
    if(bodyRequest[informacao]==undefined){
        found[informacao] = found[informacao]
    } else  {
        found[informacao] = bodyRequest [informacao]
    }
})
res.status(201).send([{message: "Clínica veterianária cadastrada com sucesso", found}])
}
// Atualização de like

const like = (req, res) => {
    const{id} = req.params
    const idEncontrado = models.find(clinica => clinica.id == id)
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
    const idEncontrado = models.find(clinica => clinica.id == id)
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
    deletarClinica,
    atualizacao,
    like,
    deslike
    
}
