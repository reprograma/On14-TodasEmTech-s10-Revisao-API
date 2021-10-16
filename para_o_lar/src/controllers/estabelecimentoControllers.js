const models = ('../modes/estabelecimento.json');

const getAll = (req, res) =>{ //listando tudo
res.status(200).send(models)
}

const getID = (req, res) =>{
    const idSolicitado = req.params.id

    const found = models.find(estabelecimento => estabelecimento.id == idSolicitado)
    res.status(200).send(found)

    if(found == undefined){
        res.status(404).send({mensagem: "Estabelecimento não escontrado"})
    }

    res.status(200).send(found)

}

module.exports = {
    getAll,
    getID
}

//crient com get e post - para a aula de quarta