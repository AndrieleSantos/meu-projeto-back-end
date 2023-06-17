const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333 

const mulheres = [
    {
        nome: 'Andriele Santos',
        imagem: 'https://www.instagram.com/p/Cs-KXGwOPGMSPBH9AZiQngiswGdU40oPYkOzd40/',
        minibio: 'Gerente de Tecnologia e Nadadora'
    },
    {
        nome: 'Izabelle Assis', 
        imagem: 'https://www.instagram.com/p/ComeWvDu80oeRrSLbHhIeXOFYfGJg5byj8LfWg0/',
        minibio: 'Jornalista e grande amiga'
    },
    {
        nome: 'Patricia Frigeri',
        imagem: 'https://www.instagram.com/p/B6nkuewlGFTFMXK_0efNk6hJJT6s4U0h5GhPJw0/',
        minibio: 'Gerente de Marketing e Professora de Ballet'
    },
    {

        nome: 'Vitória Santos',
        imagem: 'https://www.instagram.com/p/Cd4ktJ0ulJTZGNcMlSlTTPy_-wmywTL-8b78lg0/',
        minibio: 'My Syster e Artista de Aquarela :)'
    }
] 

function mostraMulheres(request,response) {
response.json (mulheres)

}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres',mostraMulheres))
app.listen(porta,mostraPorta)