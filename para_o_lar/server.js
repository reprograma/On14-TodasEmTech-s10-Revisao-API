const app = require('./src/app.js');

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor Rodando na porta http://localhost:${PORT}`);
})