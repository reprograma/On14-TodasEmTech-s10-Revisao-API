const app = require('./src/app.js');
const PORT = 7050;

app.listen(PORT, () => {
    console.log(`Servidor Rodando em http://localhost:${PORT}`);
})