const app = require("../app")
const models = require("../models/estabelecimentos.json")

const getAll = (request, response) => {

    //const pagamento = request.query
    const {pagamento, bairro, delivery} = request.query //para filtrar por categorias do json

    let filtrados = models

    //filtro por pagamento
    if (pagamento){
        filtrados = filtrados.filter(estabelecimento=> {
            return estabelecimento.pagamento.includes(pagamento) //includes só serve pra array
        })
    }

    //filtro por bairro
    if (bairro) {
        filtrados = filtrados.filter(estabelecimento =>{
            return estabelecimento.bairro == bairro
        })
    }

    //filtro por delivery
    if (delivery) {
        filtrados = filtrados.filter(estabelecimento=> {
            return estabelecimento.delivery == (delivery == 'true' ? true : false)
        })
        //arr.filter( function(x) { return Boolean(x); });
        //banners.filter(function (b) { return b.BannerAtivo } )
    }

    response.status(200).send(filtrados)

}

//FAZER UM POST DE CADASTRO DE ESTABELECIMENTO OU LIKE E DESLIKE

const createEstabelecimento = (request, response)=>{ //criar um novo estabelecimento
    const bodyRequest = request.body //pega info do body
    console.log(bodyRequest)

    let novoEstabelecimento = { //cria novo objeto 1:55m analu
        "id": (models.length)+1,
        "likes": bodyRequest.likes,
        "nome": bodyRequest.nome,
        "categoria": bodyRequest.categoria,
        "endereço": bodyRequest.endereço,
        "numero": bodyRequest.numero,
        "bairro": bodyRequest.bairro,
        "cidade": bodyRequest.cidade,
        "telefone": bodyRequest.telefone,
        "pagamento": bodyRequest.pagamento,
        "delivery": bodyRequest.delivery
    }
//tentar fazer o try catch para erro no lugar de if else
    if(!bodyRequest.nome){
        return response.status(400).json({error: 'Nome não pode estar em branco.'})
    }else {
        models.push(novoEstabelecimento)

        response.status(201).json(
            [
                {
                   "mensagem": "Estabelecimento cadastrado com sucesso",
                   novoEstabelecimento 
                }
            ]
        )
    }

    // response.status(200).json(
    //     [
    //         {
    //             "mensagem": "filme atualizado com sucesso"
    //         }

    //     ]
    // )
    
}


// const postAll = (request, response) =>{
//     const {nome, categoria, endereço, numero, bairro, cidade, telefone, pagamento, delivery} = request.body


//     // let inserindo = models
//     response.status(200).json(postAll)
// }
// v_app.post('/produtos', function (req, res) {

//     var v_produto = req.body;

//     console.log(v_produto);

//     var v_connection = v_app.infra.connectionFactory();
//     var v_produtosDAO = new v_app.infra.ProdutosDAO(v_connection);

//     v_produtosDAO.salva(v_produto, function (err, results) {
//         //v_listaProdutos(req, res);
//         res.redirect('/produtos');
//     });

//     v_connection.end();
// });

// app.post('', async (request, response) => {
//     const {nome, categoria, endereço, numero, bairro, cidade, telefone, pagamento, delivery} = request.body
//  //se a pessoa não preencher o nome então não aceita
//     if(!nome){
//         return response.status(400).json({error: 'Nome não pode estar em branco.'})
//     }
// })

// function cadastrarEstabelecimento (body){
//     const opcoes = {
//         method: 'POST',
//         body: estabelecimento.keys(body)
//     }
//     return fetch('http://localhost:7050/cadastro', opcoes)
//         .then(T => T.json())
// }
// cadastrarEstabelecimento({nome, categoria, endereço, numero, bairro, cidade, telefone, pagamento, delivery})
//     .then(()=> console.log('cadatrado'))
//     .catch(()=> console.log('falha ao cadastrar'))



const getId = (request, response) => {
    const idSolicitado = request.params.id

    const found = models.find(estabelecimento => estabelecimento.id == idSolicitado)

    if(found == undefined){
        response.status(404).send({message: "Estabelecimento não encontrado."})
    }

    response.status(200).send(found)
}

module.exports = {
    getAll,
    getId,
    createEstabelecimento
}