const app = require('./src/app');
const PORT = 7050;

app.listen(PORT, ()=> {
    console.log(`o servidor esta rodando na porta:${PORT}`);
})