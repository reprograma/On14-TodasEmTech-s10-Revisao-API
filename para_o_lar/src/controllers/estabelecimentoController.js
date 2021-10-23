const models = require("../models/estabelecimento.json");
const fs = require("fs");


const write = (request, response) => {
  fs.writeFile(
    "./src/models/estabelecimento.json",
    JSON.stringify(models),
    "utf8",
    function (err) {
      if (err) {
        return response.status(500).json([
          {
            message: "Erro.",
          },
        ]);
      }
    }
  );
};
const getAll = (request, response) => {
  const { pagamento, bairro, delivery } = request.query;

  let filtrados = models;

  if (pagamento) {
    filtrados = filtrados.filter((estab) => {
      return estab.pagamento.includes(pagamento);
    });
  }

  if (bairro) {
    filtrados = filtrados.filter((estab) => {
      return estab.bairro.includes(bairro);
    });
  }

  if (delivery) {
    filtrados = filtrados.filter((estab) => {
      return estab.delivery == (delivery == "true" ? true : false);
    });
  }
  response.status(200).send(filtrados);
};

const getById = (request, response) => {
  const idRequest = request.params.id;
  let estabelecimentoFound = models.find((estab) => estab.id == idRequest);

  if (estabelecimentoFound == undefined) {
    request.status(404).json([
      {
        message: "Estabelecimento não encontrado.",
      },
    ]);
  }
  response.status(200).send(estabelecimentoFound);
};

const updateLikes = (request, response) => {
  const idReq = request.params.id;
  let likeReq = request.body.likes;
  const estabFound = models.find((estab) => estab.id == idReq);

  let Like = estabFound.likes + likeReq;

  estabFound.likes = Like;
  write();
  response.status(200).json([
    {
      message: "Likes foram atualizados com sucesso",
      models,
    },
  ]);
};

const create = (request, response) => {
  const bodyReq = request.body;
  let estab = {
    id: models.length + 1,
    likes: bodyReq.likes,
    nome: bodyReq.nome,
    categoria: bodyReq.categoria,
    endereço: bodyReq.endereço,
    bairro: bodyReq.bairro,
    cidade: bodyReq.cidade,
    telefone: bodyReq.telefone,
    pagamento: bodyReq.pagamento,
    delivery: bodyReq.delivery,
  };
  models.push(estab);
  write();

  response.status(201).json([
    {
      message: "O estabelecimento foi criado com sucesso.",
      models,
    },
  ]);
};

module.exports = {
  getAll,
  getById,
  updateLikes,
  create,
};
