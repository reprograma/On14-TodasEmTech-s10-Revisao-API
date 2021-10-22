const { response } = require("express");
const models = require("../models/usuarios.json");

const getAll = (require, response) => {
  const { mestra, sistemas, cidade} = require.query;
  let filtrado = models;

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

const getById = (require, response) => {
 
    const {id} = require.params
    const found = models.find(usuario => usuario.id == id);


    if (found == undefined) {
      response.status(404).send({message: "Usuario não encontrado"})
    }
    response.status(200).send(found);
  
}

const createUser = (require, response) => {
  const body = require.body

  let newUser = {
    
      "id": (models.length)+1,
      "recomendacoes": body.recomendacoes,
      "nome": body.nome,
      "experiencia": body.experiencia, 
      "cidade": body.cidade,
      "telefone": body.telefone,
      "sistemas": body.sistemas,
      "mestra": body.mestra
      
  }

  models.push(newUser);
  response.status(201).send({message: "Usuario cadastrado com sucesso", newUser})
}

const addRecommendation = (require, response) => {
  const {id} = require.params;
  let userRecommended = models.find(user => user.id == id);
  const {recomendar, desrecomendar} = require.query;
  
  if(recomendar) {
  let recommendations = userRecommended.recomendacoes;
  recommendations++
  userRecommended.recomendacoes = recommendations;
  return response.status(200).send({message: `Você recomendou ${userRecommended.nome}, este foi recomendado ${userRecommended.recomendacoes} `})
  }
  if(desrecomendar) {
    let recommendations = userRecommended.recomendacoes;
    recommendations--
    userRecommended.recomendacoes = recommendations;
    return response.status(200).send({message: `Você desrecomendou ${userRecommended.nome}, este foi recomendado ${userRecommended.recomendacoes} `})
  }

  response.status(404).send({message: `Não encontramos se você gostaria de recomendar ou desrecomendar este usuario`})

}



module.exports = {
  getAll,
  getById,
  createUser,
  addRecommendation
}