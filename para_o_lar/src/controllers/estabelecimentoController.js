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

/*
const getById = (request, response) => {

    const idSolicitado = request.params.id;
    //const { id } = request.params;

    const found = models.find (
        
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
        
    }
        
    response.status(200).send(idFound);

}
*/
const getId = (req, res) => {
    const idSolicitado = req.params.id
 
    const found = models.find(estabelecimento => estabelecimento.id == idSolicitado)

    if(found == undefined){
        res.status(404).send({message: 'Estabelecimento não encontrado'})
    }

    res.status(200).send(found)


}


const cadastro = (request, response) => {

    const bodyRequest = request.body;

    let novoEstabelecimento = {

        id: (models.length + 1),
        likes: bodyRequest.likes,
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
    
    };
    
    //trabalhar os campos obrigatorios
    if (!bodyRequest.nome) {
        
        return response.status(400).send(
            [
                {
                    "Message": "O campo 'nome' é obrigatório."
                }
            ]
        );
    }

    models.push(novoEstabelecimento);

    fs.writeFile("./src/models/estabelecimentos.json", JSON.stringify(models), "utf-8", function (err) {
        
        if (err) return console.log(err);
        
    })

    response.status(201).send(models);
}

const updateLike = (request, response) => {

    const { id } = request.params; // mesma coisa que "const idRequest = request.params.id". As chaves é pq o id é um objeto

    const found = models.find(estabelecimento => estabelecimento.id == id);

    if (found == undefined) {

        response.status(404); //não tem ponto depois do status é ".status(404)."
        
    }
    
    found.likes += 1;
    
    response.status(200).send(found);

}

const updateDeslike = (request, response) => {

    const { id } = request.params; // mesma coisa que "const idRequest = request.params.id". As chaves é pq o id é um objeto

    const found = models.find(estabelecimento => estabelecimento.id == id);

    if (found == undefined) {

        response.status(404).send({"Message": "Estabelecimento não encontrado."}); //não tem ponto depois do status é ".status(404)."
        
    }
    
    found.likes -= 1;
    
    response.status(200).send(found);

}

const deleteEstabelecimento = (request, response) => {

    const { id } = request.params; // mesma coisa que "const idRequest = request.params.id". As chaves é pq o id é um objeto

    const found = models.find(estabelecimento => estabelecimento.id == id);

    if (found == undefined) {

        response.status(404).send (
            
            {
                
                "Message": "Estabelecimento não encontrado."

            }

        ); //não tem ponto depois do status é ".status(404)."
        
    }

    const index = models.indexOf(found);

    models.splice(index, 1);
    
    response.sendStatus(204);

}

const atualizacao = (request, response) => {
    
    const { id } = request.params; // mesma coisa que "const idRequest = request.params.id". As chaves é pq o id é um objeto
    
    const bodyRequest = request.body;

    let found = models.find(estabelecimento => estabelecimento.id == id);

    if (found == undefined) {

        response.status(404).send (
            
            {
                
                "Message": "Estabelecimento não encontrado."

            }

        ); //não tem ponto depois do status é ".status(404)."
        
    }


    Object.keys(found).forEach(
        
        (key) => bodyRequest[key] == undefined ? found[key] = found[key] : found[key] = bodyRequest[key]

    );

    response.status(200).send(found);
}



module.exports = {
    getAll,
    //getById,
    getId,
    cadastro,
    updateLike,
    updateDeslike,
    deleteEstabelecimento,
    atualizacao
};

/* 
    PARA CASA: 
    
    Fazer um cadastro de um estabelecimento(POST)
    ou
    fazer like e deslike.

*/