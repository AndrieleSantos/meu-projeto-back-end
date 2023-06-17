const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333 

function mostraMulher( request, response) {
response.json({
    nome: 'Andriele Santos',
    imagem: 'https://www.instagram.com/p/Cs-KXGwOPGMSPBH9AZiQngiswGdU40oPYkOzd40/',
    minibio: 'Gerente de Tecnologia e Nadadora'
})
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}
app.use(router.get('/mulher', mostraMulher)) 
app.listen(porta,mostraPorta)