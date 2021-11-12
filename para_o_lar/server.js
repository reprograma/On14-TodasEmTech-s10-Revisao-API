const app = require('./src/app');
const PORT = 6565;


app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
})