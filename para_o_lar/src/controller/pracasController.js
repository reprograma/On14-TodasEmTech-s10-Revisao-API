const pracasJson = require("../models/pacas.json");

const getAll = (req, res) => {
  const { bairro, nome } = req.query;
  let filtrados = pracasJson;

  if (nome) {
    filtrados = filtrados.filter((pracasJson) => {
      return pracasJson.nome == nome;
    });
  }

  if (bairro) {
    filtrados = filtrados.filter((pracasJson) => {
      return pracasJson.bairro == bairro;
    });
  }

  res.status(200).json(filtrados);
};
// fazer um like, ou post
//filtra o estabelecimento e add +1 no like, ->likes = likes + 1 (put)
const getId = (req, res) => {
  const idPraca = req.params.id;

  const found = pracasJson.find((pracasId) => pracasId.id == idPraca);

  if (found == undefined) {
    res.status(400).send({ message: "estabelecimento não encontrado" });
  }
  res.status(200).send(found);
};
// cadastrar pracas

const registerPracas = (req, res) => {
  let bodyPraca = req.body;

  let newPraca = {
    id: pracasJson.length + 1,
    nome: bodyPraca.nome,
    coordenada: bodyPraca.coordenada,
    bairro: bodyPraca.bairro,
    seguranca: {
      perigoso: 0,
      tranquilo: 0,
    },
    publico: {
      animais: 0,
      namorados: 0,
      idosos: 0,
      atividadeFisica: 0,
    },
    comercioNoLocal: "nao",
  };
  pracasJson.push(newPraca);
  res.status(200).json(newPraca);
};

const update = (req, res) => {
  const idRequestPracas = req.params.id;
  let newUpdate = req.body;

  newUpdateFound = pracasJson.find((pracas) => (pracas.id = idRequestPracas));

  let newUpdateId = {
    id: idRequestPracas,
    nome: newUpdate.nome,
    coordenada: newUpdate.coordenada,
    bairro: newUpdate.bairro,
    seguranca: {
      perigoso: 0,
      tranquilo: 0,
    },
    publico: {
      animais: 0,
      namorados: 0,
      idosos: 0,
      atividadeFisica: 0,
    },
    comercioNoLocal: newUpdate.comercio,
  };

  pracasJson.push(newUpdateId);
  res.status(200).json([
    {
      mensagem: " Informações do id atualizadas",
      newUpdateId,
    },
    //não permitir
  ]);
};
const updateComercio = (req, res) => {
  const idRequest = req.params.id;
  let newComercio = req.body.comercioNoLocal;

  comercioFound = pracasJson.find((comercio) => comercio.id == idRequest);
  comercioFound.comercioNoLocal = newComercio;
  res.status(200).json([
    {
      mensagem: "Atualizada informação sobre comercio",
      comercioFound,
    },
  ]);
};

const deletePraca = (req, res) => {
  const idRequest = req.params.id;

  const foundPraca = pracasJson.findIndex((praca) => praca.id == idRequest);

  pracasJson.splice(foundPraca, 1);

  res.status(200).json([
    {
      mensagem: "Praça deletada com sucesso",
      deletado: idRequest,
      pracasJson,
    },
  ]);
};

const updatePerigo = (req, res) => {
  const idRequestPracas = req.params.id;

  newUpdateFound = pracasJson.find((praca) => praca.id == idRequestPracas);

  newUpdateFound.seguranca.perigoso = newUpdateFound.seguranca.perigoso + 1;

  res.status(200).json(newUpdateFound);
};

module.exports = {
  getAll,
  getId,
  registerPracas,
  update,
  updateComercio,
  deletePraca,
  updatePerigo,
};
