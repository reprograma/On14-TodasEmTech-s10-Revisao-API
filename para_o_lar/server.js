const app = require("./src/app") //chamando o arquivo app

const PORT = 7050

app.listen(PORT, ()=>{
    console.log(`Alô doçura estou na porta ${PORT}`);
})