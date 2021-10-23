const models = require("../models/estabelecimentos.json");
const fs = require("fs")


const getAll = (request, response) => {
    
    const { pagamento, bairro, delivery } = request.query; //transformei cada objeto em uma const

    let filtrados = models; // atribui a const models a let filtrados

    // Filtro por pagamento
    if (pagamento) {
        
        filtrados = filtrados.filter (
            
            estabelecimento => {
                
                return estabelecimento.pagamento.includes(pagamento)

            }
        );
    }
    
    if (bairro) {
        filtrados = filtrados.filter (
            
            estabelecimento => {
            
                return estabelecimento.bairro == bairro //não é necessário includes pq "bairro" não é um array. Includes percorre um array e retorna o que contiver o que eu estiver pesquisando.
            }
        );

    }

    if (delivery) {
        
        filtrados = filtrados.filter (
            
            estabelecimento => {
            
                return estabelecimento.delivery == (
                    
                    delivery == "true" ? true : false

                )
            }
        );
    }

    response.status(200).send(filtrados); //tenho que chamar a let "filtrados", para poder pegar todos os filtros que criei. Se chamar send(models), vai retornar o json inteiro e ignorar os filtros.

}

const getById = (request, response) => {

    const idSolicitado = request.params.id;
    //const { id } = request.params;

    const idFound = models.find (
        
        estabelecimento => {
        
            estabelecimento.id == idSolicitado

        }
    );

    if (found == undefined) {
        
        response.status(404).send (
            
            {
                
                "message": "Estabelecimento não encontrado."
                
            }

        );
        
    } else {
        
        response.status(200).send(idFound);

    }
}

const cadastro = (request, response) => {
    const bodyRequest = request.body

    const novoEstabelecimento = {

        id: (models.length + 1),
        likes: 1,
        nome: bodyRequest.nome,
        categoria: bodyRequest.categoria,
        instagram: bodyRequest.instagram,
        endereco: bodyRequest.endereco,
        numero: bodyRequest.numero,
        bairro: bodyRequest.bairro,
        cidade: bodyRequest.cidade,
        estado: bodyRequest.estado,
        telefone: bodyRequest.telefone,
        pagamento: bodyRequest.pagamento,
        delivery: bodyRequest.delivery
    
    }
    
    models.push(novoEstabelecimento);

    fs.writeFile("./src/models/estabelecimentos.json", JSON.stringify(models), "utf-8", function (err) {
        
        if (err) return console.log(err);
        
    })

    console.log(novoEstabelecimento);

    response.status(201).send(models);
}

module.exports = {
    getAll,
    getById,
    cadastro
};

/* 
    PARA CASA: 
    
    Fazer um cadastro de um estabelecimento(POST)
    ou
    fazer like e deslike.

*/