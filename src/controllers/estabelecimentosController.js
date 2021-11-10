const app = require("../app");
const models = require("../model/estabelecimentos.json");
const getAll = (req, res) => {
  let filtrados = models;
  res.status(200).send(filtrados);

 };


const getId = (req, res) => {
  const idSolicitado = req.params.id; // const {id} = req.params outra forma de fazer por ID subtituindo a linha acima
  const idEncontrada = models.find(
    (estabelecimento) => estabelecimento.id == idSolicitado
  );
  res.status(200).send(idEncontrada);
  if (idEncontrada == undefined) {
    res.status(404).send({ message: "Estabelecimento não encontado" });
  }
};

const ritmo = (req, res) => {
    const qualRitmo = req.query.ritmos;
  let filtrados = models;

  if (qualRitmo) {
    filtrados = filtrados.filter((estabelecimento) => {
      //vai olhar um estabelecimento
      return estabelecimento.ritmos.toString().includes(qualRitmo); //toString é uma função()

      //includes determina se contem um array e retorna true ou false
    });
  }
  res.status(200).send(filtrados);
};

const createEstabelecimento = (req, res) => {
  const body = req.body; //
  const newEstabelecimento = {
    id: models.length + 1,
    likes: body.likes,
    nome: body.nome,
    endereço: body.endereço,
    numero: body.numero,
    telefone: body.telefone,
    bairro: body.bairro,
    cidade: body.cidade,
    pagamento: body.pagamento,
    ritmos: body.ritmos,
    bailes: body.bailes,
  };

  models.push(newEstabelecimento);
  res.status(200).send({
    message: "estabelecimento adicionado com sucesso!",
    newEstabelecimento,
  });
};

const deleteEstabelecimento = (req, res) => {
  const reqById = req.params.id;
  const indiceEstabelecimento = models.findIndex(
    (estabelecimento) => estabelecimento.id == reqById
  );

  models.splice(indiceEstabelecimento, 1);

  res
    .status(200)
    .json([
      { message: "escola deletada com sucesso", deletada: reqById, models },
    ]);
};

const updatePhone = (req, res) => {
  let idRequest = req.params.id;
  let escolaEncontrada = models.find(
    (estabelecimento) => estabelecimento.id == idRequest
  );
  let newPhone = req.body.telefone;
  escolaEncontrada.telefone.toString().includes(escolaEncontrada) = newPhone;
  
  
  res.status(201).json([
    {
      mensagem: "telefone da escola atualizado com sucesso",
      escolaEncontrada,
    },
  ]);
};

const like = async (req, res) => {
    try {
        const { id } = req.params
        estabelecimento = await models.findById(id)

        estabelecimento.likes += 1

        await models.updateOne(estabelecimento)
        return res.status(200).send(estabelecimento)
    } catch(error) {
        return res.status(404).send({ message: 'Escola não encontrada' })
    }
}

const dislike = async (req, res) => {
    try {
        const { id } = req.params
        estabelecimento = await models.findById(id)

        estabelecimento.likes -= 1

        await models.updateOne(estabelecimento)
        return res.status(200).send(estabelecimento)
    } catch(error) {
        return res.status(404).send({ message: 'Escola não encontrada' })
    }
}

module.exports = {
  getAll,
  getId,
  ritmo,
  deleteEstabelecimento,
  createEstabelecimento,
  updatePhone,
  like,
  dislike,
};


/*body da nova escola
{
  "id": ,
  "likes": 2,
  "nome": "Lunar Studio de Dança",
  "endereço": "Rua Major Codeceira",
  "número": 166,
  "telefone": "00000000",
  "bairro": "Santo Amaro",
  "cidade": "Recife",
  "pagamento": ["cartao", "pix"],
  "ritmo": "kizomba",
  "bailes": false
}*/