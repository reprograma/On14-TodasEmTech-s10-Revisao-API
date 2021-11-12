const models = require('../models/estabelecimento.json');


const getAll = (req, res) => {
  const {pagamento, bairro, karate } = req.query;
  let filtro = models;

  //filtrar por pagamento
  if(pagamento) {
    filtro = filtro.filter(estabelecimento => {
      return estabelecimento.pagamento.toString().toLocaleLowerCase().includes(pagamento)
    })
  }

  //filtro por bairro
  if(bairro) {
    filtro = filtro.filter(estabelecimento => {
      return estabelecimento.bairro.toString().toLocaleLowerCase().includes(bairro)
    })
  }

  //filto para saber se tem karate na academia
  if(karate) {
    filtro = filtro.filter(estabelecimento => {
      return estabelecimento.karate == (karate == "true" ? true : false)
    })
  }

  res.status(200).send(filtro);
}

const getById = (req, res) => {
  const idSolicitado = req.params.id 
  
  const foundId = models.find(estabelecimento => estabelecimento.id == idSolicitado);

  if(foundId == undefined){
    res.status(404).send({mensagem: "Estabelecimento não encontrado."});
  }
  res.status(200).send(foundId);

}

const create = (req, res) => {
  const createRegistration = req.body 

  let newRegistration = {
    id: (models.length) + 1,
    likes: createRegistration.likes,
    deslikes: createRegistration.deslikes,
    nome: createRegistration.nome,
    categoria: createRegistration.categoria,
    endereço: createRegistration.endereço,
    numero: createRegistration.numero,
    cidade: createRegistration.cidade,
    estado: createRegistration.estado,
    telefone: createRegistration.telefone,
    pagamento: createRegistration.pagamento,
    karate: createRegistration.karate
  }

  if(!createRegistration.nome || createRegistration.categoria || createRegistration.karate || createRegistration.pagamento) {
    return res.status(400).send({mensage: 'Nome é obrigatório!'})
  }

  if(createRegistration.nome.length > 50) {
    return res.status(400).send({message: "Ultrapassou o limite de 50 caracteres."})
  }

  models.push(newRegistration);

  res.status(201).json([
    {
      mensage: "Academia cadastrada com sucesso",
      newRegistration
    }
  ]);

}

const likesUpdate = (req, res) => {
  const id = req.params.id;
  const filterGym = models.find(estabelecimento => estabelecimento.id == id);

  if(filterGym == undefined) {
    res.status(404).send({mensage: "Estabelecimento não encontrado."})
  }

  filterGym.likes += 1
  
  res.status(200).send(filterGym)
}

const deslikesUptade = (req, res) => {
  const id = req.params.id;
  const filterGym = models.find(estabelecimento => estabelecimento.id == id);

  if(filterGym == undefined) {
    res.status(404).send({mensage: "Estabelecimento não encontrado."})
  }

  filterGym.deslikes += 1
  
  res.status(200).send(filterGym)
}

const deleteGym = (req, res) => {
  const id = req.params.id;
  const filterGym = models.find(estabelecimento => estabelecimento.id == id);

  if(filterGym == undefined) {
    res.status(404).send({mensage: "Estabelecimento não encontrado."})
  }
  
  const index = models.indexOf(filterGym)

  models.splice(index, 1)
 
  
  res.status(200).send({mensage: "Estabelecimento deletado."})
}

const updateGym = (req, res) => {
  const id = req.params.id;
  const filterGym = models.find(estabelecimento => estabelecimento.id == id);
  let body = req.body;

  body.id = id;

  if(filterGym == undefined) {
    res.status(404).send({mensage: "Estabelecimento não encontrado."})
  }
  
  

  Object.keys(filterGym).forEach((key) => {
    if(body[key] != undefined) {
      filterGym[key] = body[key];
    }
  })
  
 
  
  res.status(200).send(filterGym)
}


module.exports = {
  getAll,
  getById,
  create,
  likesUpdate,
  deslikesUptade,
  deleteGym,
  updateGym
}