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



module.exports = {
  getAll,
  getById
}