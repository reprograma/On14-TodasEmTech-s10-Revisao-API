const models = require("../models/estabelecimentos.json");

const getAll = (request, response) => {
    
    const { pagamento, bairro, delivery } = request.query; //transformei cada objeto em uma const

    let filtrados = models;

    // Filtro por pagamento
    if(pagamento) {
        
        filtrados = filtrados.filter(estabelecimento => { 
            
            return estabelecimento.pagamento.includes(pagamento)
            
        });
    }
    
    if (bairro) {
        filtrados = filtrados.filter(estabelecimento => {
            
            return estabelecimento.bairro == bairro //não é necessário includes pq "bairro" não é um array. Includes percorre um array e retorna o que contiver o que eu estiver pesquisando.

        });

    }

    if (delivery) {
        
        filtrados = filtrados.filter(estabelecimento => {
            
            return estabelecimento.delivery == (
                
                delivery == "true" ? true : false

            )

        });
    }

    response.status(200).send(filtrados); //tenho que chamar a let "filtrados", para poder pegar todos os filtros que criei. Se chamar send(models), vai retornar o json inteiro e ignorar os filtros.

}

const getById = (request, response) => {

    const idSolicitado = request.params.id;
    //const { id } = request.params;

    const idFound = models.find(estabelecimento => {
        
        estabelecimento.id == idSolicitado
    });

    if (found == undefined) {
        
        response.status(404).send(
            {
                "message": "Estabelecimento não encontrado."
            }
        );
        
    } else {
        
        response.status(200).send(idFound);

    }
}

module.exports = {
    getAll,
    getById
};

/* 
    PARA CASA: 
    
    Fazer um cadastro de um estabelecimento(POST)
    ou
    fazer like e deslike.

*/