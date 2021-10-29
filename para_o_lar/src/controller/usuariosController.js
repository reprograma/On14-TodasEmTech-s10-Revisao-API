const userJson = require("../models/usuarios.json");

const getAll = (request, response) => {
  const { mestra, sistemas, cidade} = request.query;
  let filtrado = userJson;

  //filtrado por pagamento
  if(sistemas) {
    filtrado = filtrado.filter(usuario => {
      return usuario.sistemas.toString().includes(sistemas)
    })
  }

  //filtra por usuarios que mestram
  if(mestra) {
    filtrado = filtrado.filter(usuario => {
      return usuario.mestra == mestra
    })
  }

  //filtra pela cidade
  if(cidade) {
    filtrado = filtrado.filter(usuario => {
      return usuario.cidade == cidade;
    })
  }



    response.status(200).send(filtrado);
}

const getById = (request, response) => {
 
    const {id} = request.params
    const found = userJson.find(usuario => usuario.id == id);


    if (found == undefined) {
      response.status(404).send({message: "Usuario não encontrado"})
    }
    response.status(200).send(found);
  
}

const createUser = (request, response) => {
  const body = request.body

  let newUser = {
    
      "id": (userJson.length)+1,
      "recomendacoes": body.recomendacoes,
      "nome": body.nome,
      "experiencia": body.experiencia, 
      "cidade": body.cidade,
      "telefone": body.telefone,
      "sistemas": body.sistemas,
      "mestra": body.mestra
      
  }

  userJson.push(newUser);
  response.status(201).send({message: "Usuario cadastrado com sucesso", newUser})
}

const addRecommendation = (request, response) => {
  const {id} = request.params;
  let userRecommended = userJson.find(user => user.id == id);
  const {recomendar, desrecomendar} = request.query;
  let userRecommendation = userRecommended.recomendacoes;
  let userName = userRecommended.nome;
  
  if(recomendar) {
  let recommendations = userRecommendation
  recommendations++
  userRecommendation = recommendations;
  return response.status(200).send(
    {message: `Você recomendou ${userName}, este foi recomendado ${userRecommendation} `})
  }
  
  if(desrecomendar) {
    let recommendations = userRecommendation;
    recommendations--
    userRecommendation = recommendations;
    return response.status(200).send(
      {message: `Você desrecomendou ${userName}, este foi recomendado ${userRecommendation} `})
  }

  response.status(404).send({message: `Não encontramos se você gostaria de recomendar ou desrecomendar este usuario`})

}

const deleteUser = (request, response) => {
  const {id} = request.params;
  const indexRequested = userJson.findIndex(user => user.id == id);

  if (indexRequested == -1) {
    response.sendStatus(404)
  }

  userJson.splice(indexRequested, 1)
  response.sendStatus(204);

}

module.exports = {
  getAll,
  getById,
  createUser,
  addRecommendation,
  deleteUser
}