const models = require("../models/estabelecimentos.json");
const fs = require("fs");

const getAll = (request, response) => {
    
    const { pagamento, bairro, delivery } = request.query; //transformei cada objeto em uma const

    let filtrados = models; // atribui a const models a let filtrados

    // Filtro por pagamento
    if (pagamento) filtrados = filtrados.filter(estabelecimento => estabelecimento.pagamento.includes(pagamento));
    
    if (bairro) filtrados = filtrados.filter(estabelecimento => estabelecimento.bairro == bairro); //não é necessário includes pq "bairro" não é um array. Includes percorre um array e retorna o que contiver o que eu estiver pesquisando.

    if (delivery) filtrados = filtrados.filter(estabelecimento => estabelecimento.delivery == delivery == "true" ? true : false);

    response.status(200).send(filtrados); //tenho que chamar a let "filtrados", para poder pegar todos os filtros que criei. Se chamar send(models), vai retornar o json inteiro e ignorar os filtros.

}

const getId = (req, res) => {
    
    const idSolicitado = req.params.id
 
    const found = models.find(estabelecimento => estabelecimento.id == idSolicitado);

    found == undefined ? res.status(404) : res.status(200).send(found);

}


const cadastro = (request, response) => {

    const bodyRequest = request.body;

    let novoEstabelecimento = {

        id: (models.length + 1),
        nome: bodyRequest.nome,
        likes: 0,
        deslikes: 0,
        categoria: bodyRequest.categoria,
        instagram: bodyRequest.instagram,
        endereco: bodyRequest.endereco,
        numero: bodyRequest.numero,
        bairro: bodyRequest.bairro,
        cidade: bodyRequest.cidade,
        estado: bodyRequest.estado,
        telefone: bodyRequest.telefone,
        pagamento: bodyRequest.pagamento,
        delivery: bodyRequest.delivery,
        //avaliaçao geral: como colocar nota max e nota min.
        //adicionar comentario para poder contabilizar o like ou deslike.
        //adicionar like ou deslike aos comentarios e poder comentá-los*
        comentarios: ""
    
    };

    //trabalhar os campos obrigatorios
    if (!bodyRequest.nome || !bodyRequest.categoria || !bodyRequest.telefone || !bodyRequest.pagamento) {
        
        return response.status(400).send(
            {
            "Message": "Os campos: 'nome', 'categoria', 'telefone' e 'pagamento', são obrigatórios. Certifique-se de tê-los preenchidos corretamente."
            }
        );
    }

    models.push(novoEstabelecimento);

    fs.writeFile("./src/models/estabelecimentos.json", JSON.stringify(models), "utf-8", function (err) {
        
        err ? console.log(err) : response.status(201).send(models);
        
    })

}

const updateLike = (request, response) => {

    const { id } = request.params; // mesma coisa que "const idRequest = request.params.id". As chaves é pq o id é um objeto
    const comentario = request.params;

    const found = models.find(estabelecimento => estabelecimento.id == id);

    found == undefined ? response.status(404) : found.likes += 1; //não tem ponto depois do status é ".status(404)."      
 
    response.status(200).send(found);

}

const updateDeslike = (request, response) => {

    const { id } = request.params; // mesma coisa que "const idRequest = request.params.id". As chaves é pq o id é um objeto

    const found = models.find(estabelecimento => estabelecimento.id == id);

    found == undefined ? response.status(404) : found.deslikes += 1; //não tem ponto depois do status é ".status(404)."

    
    response.status(200).send(found);

}

const deleteEstabelecimento = (request, response) => {

    const { id } = request.params; // mesma coisa que "const idRequest = request.params.id". As chaves é pq o id é um objeto

    const found = models.find(estabelecimento => estabelecimento.id == id);

    if (found == undefined) response.status(404); //não tem ponto depois do status é ".status(404)"

    const index = models.indexOf(found);

    models.splice(index, 1);
    
    response.sendStatus(204);

}

const atualizacao = (request, response) => {
    
    const { id } = request.params; // mesma coisa que "const idRequest = request.params.id". As chaves é pq o id é um objeto
    
    const bodyRequest = request.body;

    bodyRequest.id == id;

    let found = models.find(estabelecimento => estabelecimento.id == id);

    if (found == undefined) response.status(404); //não tem ponto depois do status é ".status(404)"


    Object.keys(found).forEach(
        
        (key) => bodyRequest[key] == undefined ? found[key] = found[key] : found[key] = bodyRequest[key]

    );

    response.status(200).send(found);
}

module.exports = {
    getAll,
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

    Mudar a rede social e criar a lógica para os botões de like e deslike e refinar as validações para cadastrar novos estabelecimentos, definindo as informações obrigatórias e limite de caracteres.


    Readme completo:

    Apresentação do projeto, 
    arquitetura, 
    tecnologias 
    orientação ao usuário.

*/
