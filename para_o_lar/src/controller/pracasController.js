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

const getId = (req, res) => {
  const idPraca = req.params.id;

  const found = pracasJson.find((pracasId) => pracasId.id == idPraca);

  if (found == undefined) {
    res.status(400).send({ message: "estabelecimento não encontrado" });
  }
  res.status(200).send(found);
};

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

const checkIn = (req, res) => {
  const idRequestPracas = req.params.id;

  newUpdateFound = pracasJson.find((praca) => praca.id == idRequestPracas);

  newUpdateFound.checkIn = newUpdateFound.checkIn + 1;

  res.status(200).json(newUpdateFound);
};

const updatePerigo = (req, res) => {
  const idRequestPracas = req.params.id;

  newUpdateFound = pracasJson.find((praca) => praca.id == idRequestPracas);

  newUpdateFound.seguranca.perigoso = newUpdateFound.seguranca.perigoso + 1;

  res.status(200).json(newUpdateFound);
};

const updateTranquilo = (req, res) => {
  const idRequestPracas = req.params.id;

  newUpdateFound = pracasJson.find((praca) => praca.id == idRequestPracas);

  newUpdateFound.seguranca.tranquilo = newUpdateFound.seguranca.tranquilo + 1;

  res.status(200).json(newUpdateFound);
};

const updateAnimais = (req, res) => {
  const idRequestPracas = req.params.id;

  newUpdateFound = pracasJson.find((praca) => praca.id == idRequestPracas);

  newUpdateFound.publico.animais = newUpdateFound.publico.animais + 1;

  res.status(200).json(newUpdateFound);
};

const updateIdosos = (req, res) => {
  const idRequestPracas = req.params.id;

  newUpdateFound = pracasJson.find((praca) => praca.id == idRequestPracas);

  newUpdateFound.publico.idosos = newUpdateFound.publico.idosos + 1;

  res.status(200).json(newUpdateFound);
};

const updateNamorados = (req, res) => {
  const idRequestPracas = req.params.id;

  newUpdateFound = pracasJson.find((praca) => praca.id == idRequestPracas);

  newUpdateFound.publico.namorados = newUpdateFound.namorados.idosos + 1;

  res.status(200).json(newUpdateFound);
};

const updateAtividadeFisica = (req, res) => {
  const idRequestPracas = req.params.id;

  newUpdateFound = pracasJson.find((praca) => praca.id == idRequestPracas);

  newUpdateFound.publico.atividadeFisica =
    newUpdateFound.publico.atividadeFisica + 1;

  res.status(200).json(newUpdateFound);
};

const updateLimpo = (req, res) => {
  const idRequestPracas = req.params.id;

  newUpdateFound = pracasJson.find((praca) => praca.id == idRequestPracas);

  newUpdateFound.limpeza.limpa = newUpdateFound.limpeza.limpa + 1;

  res.status(200).json(newUpdateFound);
};

const updateSujo = (req, res) => {
  const idRequestPracas = req.params.id;

  newUpdateFound = pracasJson.find((praca) => praca.id == idRequestPracas);

  newUpdateFound.limpeza.suja = newUpdateFound.limpeza.suja + 1;

  res.status(200).json(newUpdateFound);
};

const updatePaisagismo = (req, res) => {
  const idRequestPracas = req.params.id;

  newUpdateFound = pracasJson.find((praca) => praca.id == idRequestPracas);

  newUpdateFound.conservacao.precisaManutencao.paisagismo =
    newUpdateFound.conservacao.precisaManutencao.paisagismo + 1;

  res.status(200).json(newUpdateFound);
};

const updateEquipamento = (req, res) => {
  const idRequestPracas = req.params.id;

  newUpdateFound = pracasJson.find((praca) => praca.id == idRequestPracas);

  newUpdateFound.conservacao.precisaManutencao.manutencaoEquipamentos =
    newUpdateFound.conservacao.precisaManutencao.manutencaoEquipamentos + 1;

  res.status(200).json(newUpdateFound);
};

const updatePintura = (req, res) => {
  const idRequestPracas = req.params.id;

  newUpdateFound = pracasJson.find((praca) => praca.id == idRequestPracas);

  newUpdateFound.conservacao.precisaManutencao.pintura =
    newUpdateFound.conservacao.precisaManutencao.pintura + 1;

  res.status(200).json(newUpdateFound);
};

const updateQuadraBasquete = (req, res) => {
  const idRequestPracas = req.params.id;

  newUpdateFound = pracasJson.find((praca) => praca.id == idRequestPracas);

  newUpdateFound.quadraEsportes.sim.basquete =
    newUpdateFound.quadraEsportes.sim.basquete + 1;

  res.status(200).json(newUpdateFound);
};

const updateQuadraFutebol = (req, res) => {
  const idRequestPracas = req.params.id;

  newUpdateFound = pracasJson.find((praca) => praca.id == idRequestPracas);

  newUpdateFound.quadraEsportes.sim.futebol =
    newUpdateFound.quadraEsportes.sim.futebol + 1;

  res.status(200).json(newUpdateFound);
};
// criar logica de quadra para esportes (futbol, basquete , tenis , outros)

module.exports = {
  getAll,
  getId,
  registerPracas,
  update,
  updateComercio,
  deletePraca,
  updatePerigo,
  updateTranquilo,
  updateAnimais,
  updateIdosos,
  updateNamorados,
  updateAtividadeFisica,
  checkIn,
  updateLimpo,
  updateSujo,
  updatePaisagismo,
  updateEquipamento,
  updatePintura,
  updateQuadraBasquete,
  updateQuadraFutebol,
};
