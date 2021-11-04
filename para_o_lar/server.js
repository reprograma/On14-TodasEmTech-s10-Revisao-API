const app = require("./src/app");
const PORT = 7050;

app.listen(PORT, () => {
    console.log(`Mensagem: A aplicação está rodando na porta ${PORT}`);
})
