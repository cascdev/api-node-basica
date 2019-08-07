const express = require ('express')
const router = express.Router()

router.get('/', (req, res) => {

    res.status(200).send(`<h1>Rotas Funcionando</h1>`)
});

module.exports = router

// Esta rota é apenas o get para a URL raiz (localhost:3000).