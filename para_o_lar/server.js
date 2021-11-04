const app = require('./src/app');
const PORT = 7090;

app.listen(PORT, ()=> {
    console.log(`o servidor esta rodando na porta:${PORT}`);
})