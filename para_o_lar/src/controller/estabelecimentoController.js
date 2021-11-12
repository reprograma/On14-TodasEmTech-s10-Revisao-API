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
    nome: createRegistration.nome,
    cadastro: createRegistration.cadastro,
    endereço: createRegistration.endereço,
    numero: createRegistration.numero,
    cidade: createRegistration.cidade,
    estado: createRegistration.estado,
    telefone: createRegistration.telefone,
    pagamento: createRegistration.pagamento,
    karate: createRegistration.karate
  }

  models.push(newRegistration);

  res.status(201).json([
    {
      mensagem: "Academia cadastrada com sucesso",
      newRegistration
    }
  ]);

}


module.exports = {
  getAll,
  getById,
  create
}