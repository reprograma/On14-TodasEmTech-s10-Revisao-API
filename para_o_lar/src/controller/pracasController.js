const pracasJson = require("../models/pacas.json");

const getAll = (req, res) => {
  const { bairro, publico, seguranca } = req.query;
  let filtrados = pracasJson;

  if (seguranca) {
    filtrados = filtrados.filter((pracasJson) => {
      return pracasJson.seguranca.includes(seguranca);
    });
  }

  if (bairro) {
    filtrados = filtrados.filter((pracasJson) => {
      return pracasJson.bairro == bairro;
    });
  }

  if (publico) {
    filtrados = filtrados.filter((pracasJson) => {
      return pracasJson.publico.includes(publico);
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
      aminais: 0,
      namorados: 0,
      idosos: 0,
      atividadeFisica: 0,
    },
  };
  console.log(pracasJson.length);
  pracasJson.push(newPraca);
  res.status(200).json(newPraca);
};

module.exports = {
  getAll,
  getId,
  registerPracas,
};
