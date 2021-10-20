const estabelecimentosJson = require("../models/estabelecimentos.json");

const getAll = (request, response) => {
    
    response.status(200).send(estabelecimentosJson);

}

const getById = (request, response) => {
    const idSolicitado = request.params.id;
    //const { id } = request.params;

    const idFound = estabelecimentosJson.find(estabelecimento => {
        
        estabelecimento.id == idSolicitado
    });

    if (found == undefined) {
        response.status(404).send(
            {
                "message": "Estabelecimento não encontrado."
            }
        )
        
    } else {
        
        response.status(200).send(idFound);

    }
}

module.exports = {
    getAll,
    getById
};